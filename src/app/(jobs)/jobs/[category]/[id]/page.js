import { notFound } from 'next/navigation';
import SearchResults from '@/components/SearchResults';
import JobSearchBox2 from '@/components/JobSearchBox2';
import HeadlineUpgrade from '@/components/forms/HeadlineUpgrade';
import HeadlineLinks from '@/components/HeadlineLinks';
import InputBlock from '@/components/forms/InputBlock';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillShareFill } from 'react-icons/bs';
import Button from './Button';
import { CloudCog } from 'lucide-react';
import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import { useSearchParams } from 'next/navigation';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import FavoriteButton from '@/components/FavoriteButton';
import { StarRank } from '@/components/StarRank';

export async function generateMetadata({ params }) {
  const job = await getJob(params.id);
  if (!job) return { title: 'not found' };
  const { title, company_name, location } = job?.data;
  return {
    title: `${title} | ${company_name}`,
    description: `Explore our ${title} job opportunities available at ${company_name}! Apply to become a ${title} today. Apply for an academic job today!`,
    keywords: `${title} jobs| ${company_name} university jobs| ${location} university jobs`,
    robots: {
      index: true,
    },
  };
}

async function getJob(id) {
  const response = await fetch(
    `https://api2.sciencejobs.com.au/api/job/${id}`,
    { next: { revalidate: 0 } }
  );
  const res = await response.json();
  // console.log(res);
  return res;
}
const JobDetailPage = async ({ params, searchParams }) => {
  //const searchParams = useSearchParams();
  const active = searchParams['active'] || false;
  console.log('====444444433333333333333333333333active=====');
  console.log(searchParams);
  console.log('====active=====', active);
  const job = await getJob(params.id);
  console.log('job', job);
  if (!job) notFound();
  const {
    employer_id,
    id: jobId,
    company_name,
    logo,
    title,
    location,
    activation_date,
    expiration_date,
    description,
    how_to_apply,
    featured,
    clientType,
    headlineOnly,
    ranking,
  } = job.data;
  console.log('ranking==============', ranking);
  const subject = encodeURIComponent('You might like this job posting!');
  const bccEmail = encodeURIComponent('post@academicjobs.com');
  const bodyEmail = encodeURIComponent(
    `I came across this job posting on AcademicJobs and thought you might be interested: https://www.academicjobs.com/jobs/myjob/${jobId}`
  );

  let bgColor = 'bg-white';
  if (company_name === 'Bond University') bgColor = 'bg-[#011a4d]';

  return (
    <>
      {/* {console.log('Top 20 ' + { topTwentyUnis })} */}
      <div className="bg-white relative content-grid mx-auto">
        <div className="bg-slate-200 full-width">
          <div className="md:flex items-center p-4 gap-8">
            <div className="md:w-1/4 md:pr-4 md:p-8">
              <Link
                href={`/employers/${company_name
                  ?.replace(/\W+/g, '-')
                  .toLowerCase()}/${employer_id}/`}
              >
                <div
                  className={`w-full rounded-lg p-4 ${bgColor}`}
                  // style={{ backgroundColor: `${bgColor}` }}
                >
                  <Image
                    className="w-full "
                    src={
                      `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` ||
                      ''
                    }
                    alt={company_name}
                    width={300}
                    height={200}
                  />
                </div>
              </Link>
            </div>
            <div className="w-3/4">
              <h1 className="text-2xl font-bold mb-2 text-black">{title}</h1>

              <div className="mb-4">
                {/* <Link href={`/employers/id/${id}`}>
                    {location}
                </Link> */}
              </div>
              <div className="flex items-center justify-start gap-6">
                {headlineOnly ? (
                  <Link href="#request-job-post" className="btn btn-aj">
                    Apply Now
                  </Link>
                ) : (
                  <Button
                    title={title}
                    company_name={company_name}
                    how_to_apply={how_to_apply}
                    // buttonText="Apply Now /jobs/[category]/[id]/page.js"
                  />
                )}
                <a
                  className="icon_share items-center min-w-[32px]"
                  href={`mailto:?bcc=${bccEmail}&subject=${subject}&body=${bodyEmail}`}
                >
                  <BsFillShareFill size={32} color="#2867B2" />
                </a>
                {/* <a href="">
                  <Image
                    src="/icons/heart.svg"
                    width={44}
                    height={44}
                    alt="Add this Job Post to Favorites"
                  />
                </a> */}
                <FavoriteButton />
                <a href="/academic-talent-pool" className="btn btn-accent">
                  Join Talent Pool
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job post header: organization, location closing date of job post  */}
      <section className="jobs_grid job_post_header_container">
        <div className="job_post_header_panel">
          <h3 className="company_name">{company_name}</h3>
          <section className="ranking flex flex-row">
            <StarRank ranking={ranking} />
            <h4 className="location pl-8">
              <Image
                src={`/icons/map-marker-icon.svg`}
                alt="Map Marker Icon"
                width={22}
                height={22}
                className="map_marker_icon"
              />
              {location}
            </h4>
          </section>
        </div>
        <div className="applications_close_panel">
          <h6>Applications Close</h6>
          <div className="text-sm">
            {expiration_date ? (
              <time>
                {new Date(expiration_date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            ) : (
              <p className="text-center">TBA</p>
            )}
          </div>
        </div>
      </section>
      {/* main body of job post */}
      <section className="jobs_grid job_post_panel_container">
        <article className="post_panel mt-[26px]" data-id={jobId}>
          <div className="post_content bg-white border-2 rounded-lg">
            <div className="post" data-id={jobId}>
              {
                <>
                  <div
                    className={`${
                      !headlineOnly || active ? 'job-content block' : 'hidden'
                    }`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div
                    className={`flex flex-col ${
                      headlineOnly && !active ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="flex justify-center items-center flex-wrap">
                      <Image
                        src="/academic-jobs-heart.svg"
                        width={90}
                        height={90}
                        alt="Academic Jobs Heart"
                      />
                      <Image
                        src="/love-messages/i-love-this-job.svg"
                        width={90}
                        height={90}
                        alt="Academic Jobs Heart"
                        className="mr-20"
                      />
                      <div className="grow">
                        <RequestFullJobForm
                          formName="Request Full Job Post"
                          buttonText="Please Email Full Job Post"
                          thankYouMessage="Done! You will receive the full job post shortly."
                          formType="job-request"
                          jobId={jobId}
                          employer={company_name}
                          jobTitle={title}
                          placeholder="Enter email for full job post"
                        />
                      </div>
                    </div>
                    <details className="mt-[80px]">
                      <summary class="text-[16px] text-emerald-500 hover:text-sky-500 cursor-pointer px-4 py-2 rounded-md text-center">
                        <a href="#activate-quick-post ">
                          Recruiter Information Only
                        </a>
                        <HeadlineLinks />
                      </summary>
                      <div class="px-4 py-2">
                        <HeadlineUpgrade
                          clientType={clientType}
                          jobId={jobId}
                          employer={company_name}
                          jobTitle={title}
                        />
                      </div>
                    </details>{' '}
                  </div>
                  {/* </div> */}
                </>
              }
              {/* <div className="mt-5 mb-0 text-right">Join Talent Pool</div> */}
            </div>
          </div>
        </article>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">
              <JobSearchBox2 q={title} />
            </div>
            <SearchResults
              q={title}
              filterOff={true}
              searchMessage="Related Jobs Found"
            />
          </div>
        </div>
      </section>
      {new Date(expiration_date) < new Date() && expiration_date && (
        <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 translate-y-1/2 rotate-45 skew-y-0">
          Job Fulfilled By AcademicJobs.com
        </div>
      )}
    </>
  );
};
export default JobDetailPage;
