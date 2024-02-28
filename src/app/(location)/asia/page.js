//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs Asia',
  },
  description:
    'Looking for academic jobs in Asia? Browse our listings of Asia university jobs and find your next career opportunity in this diverse and dynamic region.',
  keywords: 'Academic Jobs Asia. Asia university jobs, academic jobs in Asia, AcademicJobs',
};
export default function Page() {
  return (
    <div>
    <div className="pt-[10rem] flex flex-col items-center justify-center" >
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-asia-min.png"

          alt="AcademicJobs Asia Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        /></div>
      <JobSearchBox l="Asia"/>

      <h3 className="text-center ">We Are Asia's University Job Website</h3>
      
      <div className=" mt-[5rem] " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">
          <li><Link href="/Asia/lecturer/" >	Lecturer</Link></li>
          <li><Link href="/Asia/research/" >	Research </Link></li>
          <li><Link href="/Asia/professor/" >	Professor</Link></li>
          <li><Link href="/Asia/executive/" >	Executive</Link></li>
          <li><Link href="/Asia/admin/" >Admin</Link></li>
          <li><Link href="/Asia/hr-jobs/" >	HR</Link></li>
          <li><Link href="/Asia/student/" >	Student</Link></li>

        </ul>
      </div>


      <div className=" mt-2 " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">

          <li><Link href="/online/" >	Online </Link></li>
          <li><Link href="/jobs/remote/" >	Remote</Link></li>

          <li><Link href="/jobs/full-time/" >Full-Time</Link></li>
          <li><Link href="/jobs/part-time/" >	Part-Time</Link></li>
          <li><Link href="/jobs/casual/" >	Casual</Link></li>
        </ul>
      </div>

    


      <div className="content-grid mx-auto py-5">
        
   <div id="section" className=" full-width py-4 full-width mb-[175px] bg-slate-200">
   <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">ACADEMIC&nbsp;JOBS Asia:</span> < br /> 
          </h1>
          
        <div>
        
        <p className="px-7 mb-4 mt-1">
        Discover your dream role in Asian education fields with Academic Jobs. We focus on the importance of uni roles by providing higher education jobs to those in the academic field. By using Academic Jobs, you can excel your position in the university or college field and work with professionals across all educational arenas in Asia.</p>
        <p className="px-7">
        By finding an academic position through us, you can mark the start of your dream career path. Our jobs provided from Asia’s highest ranked universities are located across Singapore, Hong Kong, China, South Korea and more, providing endless academic opportunities for all.</p>
        </div>
      </div>
      </div>


      {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}
      {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs Asia</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic Jobs Asia has jobs from the best universities, colleges, research institutes, and organizations in Asia. You can browse through hundreds of listings from different countries and regions, such as China, Japan, Korea, India, Singapore, Malaysia, Thailand, Vietnam, Indonesia, and more. You can also filter your search by discipline, level, type, and duration of the position.</p>
              <p className="font-semibold"></p>
            </div> */}
          {/* </div> */}
          {/* <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1"> */}
            
            <h2 className="underline-full">University Jobs For All Asian Countries</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/singapore/" className='text-[#f4a10c] font-bold'>Singapore</Link></li>
                  <li><Link href="/employers/nanyang-technological-university-singapore/3152/">Nanyang
                    Technological University</Link></li>
                  <li><Link href="/employers/national-university-of-singapore/3137/">National University of Singapore</Link></li>
                  <li className='mb-1 mt-4 '><Link href="/jobs/malaysia/" className='text-[#f4a10c] font-bold'>Malaysia</Link></li>
                  <li><Link href="/employers/universiti-ualaya/12499/">Universiti Malaya (UM)</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/china/" className='text-[#f4a10c] font-bold'>China</Link></li>
                  <li><Link href="/employers/peking-university/3133/">Peking
                    University</Link></li>
                  <li><Link href="/employers/tsinghua-university/3840/">Tsinghua University</Link></li>
                  <li><Link href="/employers/fudan-university/7289/">Fudan University</Link></li>
                  <li><Link href="/employers/shanghai-jiao-tong-university/6876/">Shanghai Jiao Tong University</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/japan/" className='text-[#f4a10c] font-bold'>Japan</Link></li>
                  <li><Link href="/employers/university-of-tokyo/3155/">University of Tokyo</Link></li>
                  <li className='mb-1 mt-4 '><Link href="/jobs/indonesia/" className='text-[#f4a10c] font-bold'>Indonesia</Link></li>
                  <li><Link href="/employers/the-university-of-indonesia/12068/">The University of Indonesia</Link></li>
                  <li className='mb-1 mt-4 '><Link href="/jobs/thailand/" className='text-[#f4a10c] font-bold'>Thailand</Link></li>
                  <li><Link href="/employers/chulalongkorn-university/6615/">Chulalongkorn University</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/hong-kong/" className='text-[#f4a10c] font-bold'>Hong Kong</Link></li>
                  <li><Link href="/employers/university-of-hong-kong/3148/">University of Hong Kong</Link>
                  </li>
                  <li><Link href="/employers/chinese-university-of-hong-kong/3161/">Chinese University of
                    Hong Kong</Link></li>
                  <li><Link href="/employers/the-hong-kong-university-of-science-and-technology/3843/">The Hong Kong University of Science and Technology</Link></li>
                  <li className='mb-1 mt-4 '><Link href="/jobs/south-korea/" className='text-[#f4a10c] font-bold'>South Korea</Link></li>
                  <li><Link href="/employers/seoul-national-university/10119/">Seoul National University</Link></li>
                </ul>
              </div>
            </div>
          </div>
     
  )
}
