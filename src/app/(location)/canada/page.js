//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs Canada',
  },
  description:
    'Explore academic jobs in Canada and discover a range of opportunities in Canada university jobs such as teaching, research or administrative positions.',
  keywords: 'academic jobs in Canada, Canada university jobs',
};
export default function Page() {
  return (
    <div>
      <div className="pt-[5rem] flex flex-col items-center justify-center"></div>
      <div className=" flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-canada-min.png"
          alt="AcademicJobs Canada Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="Canada" />

      <h3 className="text-center ">We Are Canada's University Job Website</h3>

      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-500 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/Canada/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/Canada/research/"> Research </Link>
            </li>
            <li>
              <Link href="/Canada/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/Canada/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/Canada/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/Canada/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/Canada/student/"> Student</Link>
          </li>
        </ul>
      </div>

      <div className=" mt-2 ">
        <ul className="faculty-container flex  gap-4 items-center justify-center text-amber-500 ">
          <li>
            <Link href="/online/"> Online </Link>
          </li>
          <li>
            <Link href="/jobs/remote/"> Remote</Link>
          </li>

          <li>
            <Link href="/jobs/full-time/">Full-Time</Link>
          </li>
          <li>
            <Link href="/jobs/part-time/"> Part-Time</Link>
          </li>
          <li>
            <Link href="/jobs/casual/"> Casual</Link>
          </li>
        </ul>
      </div>

      <a href="/jobelephant-recruitment">
        <Image
          width={180}
          height={170}
          src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
          className="rounded-3xl my-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto"
          alt="AcademicJobs Canada logo"
        />{' '}
      </a>

      <div className="content-grid mx-auto">
        <div
          id="section"
          className=" full-width py-4  full-width mb-[175px] bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS Canada:
              </span>{' '}
              <br />
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
                Find Canada’s most rewarding academic jobs through the world’s
                leading job board. Academic Jobs provides an extensive list of
                opportunities for the future of your career in education,
                carefully sectioning the top Higher Ed jobs to curate the best
                fitting position for you. We value the fairness and unity of
                Canadian citizens, thus reflect these values into our goals as a
                company with our fair prices and unity of all academic
                professionals looking for a rewarding career.
              </p>
              <p className="px-7">
                Explore further into university Higher Ed jobs in Canada, with
                us providing university affairs to ensure you have access to
                support and guidance from the top job board globally. Whether
                you’re interested in research, teaching, or lecturing, Academic
                Jobs is the place to rely on when finding your dream academic
                job. Just a few simple steps are needed to set up a valuable
                position for yourself and your future!
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#fe0000] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">ALL YOUR BEST CANADIAN UNIVERSITY JOBS</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic jobs is more than just a listing of vacancies for canada. It is also a platform for networking, learning, and career development. Academic jobs is updated daily with new postings from universities, colleges, research institutes, and other organizations across Canada. You can browse by location, discipline, level, type, and keywords to find the best match for your qualifications and interests.</p>
              <p className="font-semibold"></p>
            </div> */}
        {/* </div> */}
        {/* <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div> */}

        <h2 className="underline-full">
          ALL HIGHER ED JOBS IN CANADA BY UNIVERSITY{' '}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
          <ul>
            <li className="mb-1 mt-4 ">
              <Link href="/JobSearch/" className="text-[#f4a10c] font-bold">
                Alberta
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-alberta/3837/">
                University of Alberta
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-calgary/12631/">
                University of Calgary
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 ">
              <Link href="/JobSearch/" className="text-[#f4a10c] font-bold">
                Quebec
              </Link>
            </li>
            <li>
              <Link href="/employers/mcgill-university/3162/">
                McGill University
              </Link>
            </li>
            <li>
              <Link href="/employers/universite-de-montreal/3836/">
                Universite De Montreal
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-waterloo/3838/">
                University of Waterloo
              </Link>
            </li>
            <li>
              <Link href="/employers/laval-university/12443">
                Laval University
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 ">
              <Link href="/JobSearch/" className="text-[#f4a10c] font-bold">
                Ontario
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-toronto//3134/">
                University of Toronto
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-british-columbia/3157/">
                University of British Columbia
              </Link>
            </li>
            <li>
              <Link href="/employers/simon-fraser-university/10280/">
                Simon Fraser University
              </Link>
            </li>
            <li>
              <Link href="/employers/mcmaster-university/3835/">
                McMaster University
              </Link>
            </li>
          </ul>
          <ul>
            <Link
              href="/JobSearch/"
              className="text-[#f4a10c] font-bold"
            ></Link>
            <Link
              href="/JobSearch/"
              className="text-[#f4a10c] font-bold"
            ></Link>
            <Link
              href="/JobSearch/"
              className="text-[#f4a10c] font-bold"
            ></Link>
            <li>
              <Link href="/employers/university-of-ottawa/12910/">
                University of Ottawa
              </Link>
            </li>
            <li>
              <Link href="/employers/york-university/13421/">
                York University
              </Link>
            </li>
            <li>
              <Link href="/employers/queens-university/9836/">
                Queen's University
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
