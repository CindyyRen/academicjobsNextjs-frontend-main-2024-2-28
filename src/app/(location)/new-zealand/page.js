//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs New Zealand',
  },
  description:
    'Find your dream academic job in New Zealand and join the leading universities at New Zealand university jobs with professor, researcher or manager roles.',
  keywords:
    'Academic Jobs New Zealand. academic job in New Zealand, New Zealand university jobs',
};
export default function Page() {
  return (
    <div>
      <div className="pt-[5rem] flex flex-col items-center justify-center"></div>
      <div className=" flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-nz.png"
          alt="AcademicJobs New Zealand Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        />
      </div>

      <JobSearchBox l="New Zealand" />

      <h3 className="text-center ">
        We Are New Zealand's University Job Website
      </h3>

      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/New-Zealand/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/New-Zealand/research/"> Research </Link>
            </li>
            <li>
              <Link href="/New-Zealand/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/New-Zealand/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/New-Zealand/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/New-Zealand/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/New-Zealand/student/"> Student</Link>
          </li>
        </ul>
      </div>

      <div className=" mt-2 ">
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">
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

      <div className="content-grid mx-auto py-5">
        <div
          id="section"
          className=" full-width py-4  full-width mb-[175px] bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS New Zealand:
              </span>{' '}
              <br />{' '}
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
                Seek university jobs in New Zealand at Academic Jobs, where we
                list all the best jobs for academics globally! We value the
                importance of an easy to navigate website where your future
                academic career path is one click away. Academic Jobs provides
                an extensive list of opportunities for the future of your career
                in education, carefully sectioning the top Higher Ed jobs to
                curate the best fitting position for you.
              </p>
              <p className="px-7 md:flex hidden">
                The number 1 job board for academics can help you find your
                dream Higher Ed job through our services. At Academic Jobs, we
                value our customers interests by providing the best career
                choices possible, making us the best job board for higher
                education positions globally!
              </p>
              <p className="px-7 md:flex hidden">
                Find all the best jobs here…
              </p>
            </div>
          </div>
        </div>

        {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}
        {/* <div className="bg-gradient-to-b to-white from-gray-300 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs New Zealand</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p> */}
        {/* </div> */}
        {/* <div className="newLine">
            <p className="newLine px-7 pb-2">On Academic Jobs New Zealand, you will find all  the best academic positions at highly regarded New Zealand universities. Our academic employment platform enables academics to pursue excellent careers in New Zealand, and our universities are always on the lookout for the greatest New Zealand Academics.</p>
              <p className="px-7 pb-8">New Zealand is a beautiful and diverse country that offers a high quality of life and a supportive academic environment. Whether you are looking for teaching, research, or leadership positions, you can find a range of academic jobs in New Zealand that match your skills and interests. You can browse through hundreds of academic jobs in New Zealand on this page, covering various fields and disciplines such as education, science, arts, business, and more.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1"> */}
        <div>
          <h2 className="underline-full">
            AcademicJobs New Zealand: All University Jobs by Region
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-1 mt-4 ">
                <Link href="/jobs/" className="text-[#f4a10c] font-bold">
                  North Island
                </Link>
              </li>
              <li>
                <Link href="/employers/the-university-of-auckland/3809/">
                  The University of Auckland
                </Link>
              </li>
              <li>
                <Link href="/employers/victoria-university-of-wellington/3807/">
                  Victoria University of Wellington
                </Link>
              </li>
              <li>
                <Link href="/employers/waikato-university/3806/">
                  Waikato University
                </Link>
              </li>
              <li>
                <Link href="/employers/auckland-university-of-technology/3804/">
                  Auckland University of Technology (AUT)
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 mt-4 ">
                <Link href="/jobs/" className="text-[#f4a10c] font-bold">
                  South Island
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-otago/3805/">
                  University of Otago
                </Link>
              </li>
              <li>
                <Link href="/employers/lincoln-university/3808/">
                  Lincoln University
                </Link>
              </li>
              <li>
                <Link href="/employers/massey-university/3810/">
                  Massey University
                </Link>
              </li>
              <li>
                <Link href="/employers/university-of-canterbury/3811/">
                  University of Canterbury
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="underline-full">The University of Auckland Jobs</h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container  flex flex-wrap px-7 md:gap-2 py-2  pb-16 text-black">
              <ul className=" flex flex-wrap gap-8">
                <li className="mb-1 mt-4 mt-4 ">
                  <a
                    href="/jobs/auckland-lecturer/"
                    class="scroll-smooth md:scroll-auto "
                  >
                    {' '}
                    UOA Lecturing Jobs
                  </a>
                </li>
                <li className="mb-1 mt-4 mt-4 ">
                  <a
                    href="/jobs/auckland-research/"
                    class="scroll-smooth md:scroll-auto"
                  >
                    {' '}
                    UOA Research Jobs
                  </a>
                </li>

                <li className="mb-1 mt-4 mt-4">
                  <a
                    href="/jobs/auckland-professor/"
                    class="scroll-smooth md:scroll-auto"
                  >
                    {' '}
                    UOA Professorial Jobs
                  </a>
                </li>
                <li className="mb-1 mt-4 mt-4">
                  <a
                    href="/jobs/auckland-executive/"
                    class="scroll-smooth md:scroll-auto"
                  >
                    {' '}
                    UOA Executive
                  </a>
                </li>

                <li className="mb-1 mt-4 mt-4">
                  {' '}
                  <a
                    href="/jobs/auckland-admin/"
                    class="scroll-smooth md:scroll-auto"
                  >
                    {' '}
                    UOA Administration{' '}
                  </a>
                </li>
                <li className="mb-1 mt-4 mt-4">
                  <a
                    href="/jobs/auckland-hr/"
                    class="scroll-smooth md:scroll-auto"
                  >
                    {' '}
                    UOA Human Resources Jobs{' '}
                  </a>
                </li>

                <li className="mb-1 mt-4 mt-4">
                  <a
                    href="/jobs/auckland/"
                    class="scroll-smooth md:scroll-auto"
                  >
                    {' '}
                    All UOA Jobs{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
