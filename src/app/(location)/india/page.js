//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs India',
  },
  description:
    'Discover academic jobs in India and apply to the top universities and institutions at India university jobs. like lecturer, researcher or a administrator role.',
  keywords:
    'Academic Jobs India. India university jobs, academic jobs in India, ',
};
export default function Page() {
  return (
    <div>
      {/* <Helmet>
        <title>Academic Jobs India</title>
        <meta name="description" content="Discover academic jobs in India and apply to the top universities and institutions at India university jobs. like lecturer, researcher or a administrator role." />
        <meta name="keywords" content="Academic Jobs India. India university jobs, academic jobs in India, " />
      </Helmet> */}
      <div className="pt-[5rem] flex flex-col items-center justify-center">
    
      </div>
      <div className=" flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-india-min.png"
          alt="AcademicJobs India logo"
          width={500}
          height={500}
          className=" w-[20rem] mb-[1rem] "
          
        />
      </div>
      <JobSearchBox l="India"/>
     
      <h3 className="text-center ">We Are India's University Job Website</h3>
     
      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-500 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/India/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/India/research/"> Research </Link>
            </li>
            <li>
              <Link href="/India/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/India/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/India/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/India/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/India/student/"> Student</Link>
          </li>
        </ul>
      </div>

      <div className=" mt-2 ">
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#138806] ">
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
        
   
    
            
            
            
        <div id="section" className=" full-width py-4  full-width mb-[175px] bg-slate-200">
  <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
  <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
          <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">ACADEMIC&nbsp;JOBS India:</span> < br />
          </h1>
          
        <div>
        
        <p className="px-7 mb-4 mt-1">
        Discover what academic positions India has to offer through Academic Jobs! We value the importance of an easy to navigate website where your academic career path is one click away. Academic Jobs provides an extensive list of opportunities for the future of your career in education, carefully sectioning the top jobs in education to curate the best fitting position for you. </p>
        <p className="px-7">
        The number 1 job board for academics can help you find your dream academic position through our services. At Academic Jobs, we value our customers interests by providing the best career choices possible, making us the best job board for higher education jobs globally!</p>
        </div>
      </div>
   
      {/* <div className="text-[#138806]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6">
        <a>▼</a> */}
      </div>
      {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#138806] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl shadow-xl">
              Academic Jobs India
            </h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p> */}
            {/* </div> */}
            {/* <div className="newLine">
              <p className="px-7">
                As an academic job seeker in India, you can explore various
                fields of study, such as engineering, technology, mathematics,
                statistics, economics, business, arts, humanities, social
                sciences, life sciences, health sciences, and more. You can also
                choose from different types of academic positions, such as
                assistant professor, associate professor, professor, lecturer,
                researcher, postdoctoral fellow, and more. On Academic Jobs
                India you can also apply for jobs in different types of
                institutions, such as public universities, private universities,
                deemed universities, institutes of national importance, central
                universities, state universities, and more.
              </p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1"> */}
              <div>
              <h2 className="underline-full">
                  AcademicJobs India: University Jobs by State{' '}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className="mb-1 mt-4 ">
                      <Link
                        href="/jobs/mumbai/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/indian-institute-of-technology-bombay/3844/">
                        Indian Institute of Technology Bombay
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-1 mt-4 ">
                      <Link
                        href="/jobs/chennai/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Chennai
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/indian-institute-of-technology-madras/3845/">
                        Indian Institute of Technology Madras
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-1 mt-4 ">
                      <Link
                        href="/jobs/vellore/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Vellore
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/vellore-institute-of-technology/3846/">
                        Vellore Institute of Technology
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-1 mt-4 ">
                      <Link
                        href="/jobs/bangalore/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/indian-institute-of-science/7818/">
                        Indian Institute of Science (IISc)
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-1 mt-4 ">
                      <Link
                        href="/jobs/delhi/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/indian-institute-of-technology-delhi/7822/">
                        Indian Institute of Technology Delhi
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
      
  );
}
