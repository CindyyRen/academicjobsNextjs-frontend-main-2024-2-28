'use client';
import React, { useState, useEffect } from 'react';
import InputBlock from '@/components/forms/InputBlock';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { jobElephantContacts } from '@/data/jobElephantContacts';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Speedo from '@/components/icons/Speedo';

const stripeLink = {
  Australia: 'https://buy.stripe.com/dR6eWA6PuaaA7VC6ov',
  JobElephant: 'https://buy.stripe.com/6oE3dSddS3Mc6Ry3ce',
  USA: 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot',
};
const JobPostForm = ({ partner, region }) => {
  const [standardMode, setStandardMode] = useState(true);
  const [newContact, setNewContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  let avatarPath = '';
  let textColor = 'text-aj';
  let partnerName = 'AcademicJobs';
  let partnerLogo = '';
  let partnerImage = '/partners/post-a-job.jpg';
  let partnerPullDown = false;
  let institutionName = `Institution Name (ie: Harvard University)`;

  if (partner === 'JobElephant') {
    partnerPullDown = true;
    partnerName = partner;
    institutionName = `${partnerName} (ie: Utah University)`;
    textColor = 'text-emerald-600';
    partnerLogo =
      'https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png';
    partnerImage =
      'https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant-puzzle.png';
    avatarPath = '/partners/jobelephant/avatars/';
  }
  useEffect(() => {
    //alert(partnerName)
    if (partnerName === '' || partnerName === 'AcademicJobs') {
      setStandardMode(true);
    } else {
      setStandardMode(false);
    }
  }, [partnerName]);
  let content;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await BaseApi.post('/sendemail', data);
    },
  });
  const onSubmit = async (data) => {
    // e.preventDefault();
    // alert()
    console.log('data', data);
    mutation.mutate({
      ...data,
      '00_formSource': `Message from: ${partnerName} Post Form`,
    });
  };
  if (mutation.isLoading) {
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">
              'Sending Jobs ...'
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (mutation.isError) {
    return <div>An error occurred: {mutation.error.message}</div>;
  }
  if (mutation.isSuccess) {
    router.push(stripeLink[region]);
  } else {
    content = (
      <main className=" content-grid">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className={`text-4xl font-bold mb-8 mt-8 underline-full text-[#3b5683]`}>
              {partnerName} Quick Post
            </h1>
            <form className=" " onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 justify-start">
                {standardMode ? null : (
                  <div className="w-full  flex flex-col items-start">
                    <label className="label-text text-xs mb-1">
                      Name (JobElephant person posting the job)
                    </label>
                    <select
                      className="select select-bordered w-full bg-white focus:outline-none focus:border-orange-500"
                      {...register('01_Name_Job_Elephant')}
                      onChange={(e) => {
                        if (partnerName === 'JobElephant') {
                          setValue('01_Organisation_Name', 'JobElephant');
                        }
                        if (e.target.value === 'Add Contact') {
                          setNewContact(true);
                          setSelectedContact(null);
                          setValue('00_First_Name', '');
                          setValue('00_Last_Name', '');
                          setValue('02_Email', '');
                        } else {
                          setNewContact(false);
                          const selectedContact = jobElephantContacts.find(
                            (contact) =>
                              `${contact.firstName} ${contact.lastName} - ${contact.email}` ===
                              e.target.value
                          );
                          setSelectedContact(selectedContact);

                          if (selectedContact) {
                            setValue(
                              '00_First_Name',
                              selectedContact.firstName
                            );
                            setValue('00_Last_Name', selectedContact.lastName);
                            setValue('02_Email', selectedContact.email);
                          }
                        }
                      }}
                    >
                      <option value="SelectContact" disabled selected>
                        Select Contact
                      </option>
                      {jobElephantContacts.map((el, index) => (
                        <>
                          <option
                            key={index}
                            value={`${el.firstName} ${el.lastName} - ${el.email}`}
                          >
                            {`${el.firstName} ${el.lastName} - ${el.email}`}
                          </option>
                        </>
                      ))}
                      <option value="Add Contact">Add Contact</option>
                    </select>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {selectedContact && selectedContact.avatar && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <Image
                        src={`${avatarPath}${selectedContact.avatar}`}
                        alt="Avatar"
                        width={100} // replace with your desired width
                        height={100} // replace with your desired height
                      />
                      <p className="mt-3">
                        Hi <b>{selectedContact.firstName}</b>, welcome to your
                        quick post form.
                      </p>
                    </>
                  )}
                </div>
                <div
                  className={`p-4 border border-sky-200 bg-sky-50 ${
                    newContact || standardMode ? 'show-form' : 'hide-form'
                  }`}
                >
                  <div className="grid w-full items-center gap-1.5">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Organization Name"
                      type="text"
                      field="01_Organisation_Name"
                      forceClass=" py-3 text-black"
                      placeholder="Organization Name"
                      autoComplete="organization"
                      hidden={newContact || standardMode ? false : true}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="First Name"
                      type="text"
                      field="01_First_Name"
                      forceClass=" py-3 text-black"
                      placeholder="First Name"
                      autoComplete="given-name"
                      hidden={newContact || standardMode ? false : true}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5 mt-4">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Last Name"
                      type="text"
                      field="01_Last_Name"
                      forceClass=" py-3 text-black"
                      placeholder="Last Name"
                      autoComplete="family-name"
                      hidden={newContact || standardMode ? false : true}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5 mt-4">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Email"
                      type="email"
                      field="02_Email"
                      forceClass=" py-3 text-black"
                      placeholder="email"
                      autoComplete="email"
                      hidden={newContact || standardMode ? false : true}
                    />
                  </div>
                </div>
                <InputBlock
                  register={register}
                  errors={errors}
                  label={institutionName}
                  type="text"
                  field="03_Institution_Name"
                  forceClass=" py-3 text-black"
                  placeholder=""
                />
                <InputBlock
                  register={register}
                  errors={errors}
                  label="Job Link URL (ie: apptrkr.com/...)"
                  type="text"
                  field="04_Job_Link_URL"
                  forceClass=" py-3 text-black"
                  placeholder=""
                />
                <label className="form-control">
                  <span className="label-text text-xs pb-1">
                    Notes or Special Instructions
                  </span>
                  <textarea
                    className="textarea textarea-bordered h-32 focus:outline-none focus:border-orange-500"
                    id="notes"
                    placeholder="Type your message here."
                    {...register('05_Notes')}
                  ></textarea>
                </label>
                {/* <QuillEditor
            value={content}
            onChange={(value) => {
              setValue("job_description", value)
            }}
            className="w-full h-[70%] mt-10 bg-white" /> */}
                <button className="btn btn-accent mt-4">Submit & PayNow</button>
              </div>
            </form>
            {partnerLogo !== '' ? (
              <picture className="min-w-full max-w-2xl mx-auto mt-16">
                <Image
                  width={800}
                  height={380}
                  src={partnerLogo ? partnerLogo : ''}
                  alt={`${partnerName ? partnerLogo : ''} logo`}
                  className="mx-auto bg-gray-200"
                />
              </picture>
            ) : null}
          </div>
          <div>
            <h2 className="mt-8">
              <Speedo size={60} />
              Post a job in 32 seconds saving you 8 minutes each time!{' '}
            </h2>
            <h3 className={`${textColor} mb-4`}>
              Welcome to the new {partnerName} Quick Job Post Technology form.
            </h3>
            <Image
              width={800}
              height={800}
              src={partnerImage}
              className=""
              alt="AcademicJobs and JobElephant Partnership"
            />
            <div className="prose">
              <p className="mt-4">
                The average time to Post a Job and fill out a form on the major
                Job Seeking platforms is 9 min or more. With AcademicJobs we
                make your life easier and save you time by…
              </p>
              <ul>
                <li>
                  Reducing Job Posting times to seconds rather than minutes
                </li>
                <li>
                  We do the heavy lifting for you (just provide a link to the
                  post)
                </li>
                <li>
                  Our Rich Text editor is coming soon (just copy and paste)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return <>{content}</>;
};
export default JobPostForm;
