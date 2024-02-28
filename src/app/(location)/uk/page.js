//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: '  Academic Jobs UK',
  },
  description:
    'Find your ideal academic jobs in UK and join the vibrant academic community at UK university jobs. We have the perfect opportunity for you whatever the job. ',
  keywords: 'Academic Jobs UK. academicjobs, academia jobs',
};
export default function Page() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);
 
  return (
    <div>
  
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-uk-min.png"

          alt="AcademicJobs UK Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        /></div>
      <JobSearchBox l="United Kingdom"/>
     
      <h3 className="text-center ">We Are United Kingdom's University Job Website</h3>
     
      <div className=" mt-[5rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link href="/UK/lecturer/" >	Lecturer</Link></li>
            <li><Link href="/UK/research/" >	Research </Link></li>
            <li><Link href="/UK/professor/" >	Professor</Link></li>
          </ul>
          <li><Link href="/UK/executive/" >	Executive</Link></li>
          <li><Link href="/UK/admin/" >Admin</Link></li>
          <li><Link href="/UK/hr-jobs/" >	HR</Link></li>
          <li><Link href="/UK/student/" >	Student</Link></li>

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
          <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">ACADEMIC&nbsp;JOBS United Kingdom:</span> < br />  
          </h1>
          
        <div>
        
        <p className="px-7 mb-4 mt-1">
        <p className="px-7">
        The number 1 job board for academics can help you find your dream academic position through our services. At Academic Jobs, we value our customers interests by providing the best career choices possible, making us the best job board for higher education jobs globally!</p>
        </p>
      
      
      
    
    

      {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}

      {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[10rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs UK</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p> */}
            {/* </div> */}
            {/* <div className="newLine">
              <p className="px-7 pb-8">To start your UK academic jobs search, you can browse through our listings of university jobs, research jobs, science jobs and managerial jobs in leading universities and top global employerss. You can also find PhDs, studentships, scholarships and fellowships to support your academic career. You can search by keywords, disciplines, locations, salary bands, contract types and more.
                Find your ideal academia jobs and join the vibrant academic community of university jobs uk. We have the perfect opportunity for you whatever the jobs in academia you are seeking.</p> */}
           
           </div>
           
             <p className="font-semibold"></p>
             
          </div>

          <div className="  flex-wrap text-center gap-6 px-7 pb-4  text-gray-400" >
            <Link href="/russelgroup/" >	Russel Group</Link> </div>

            </div>




          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
              <h2 className="underline-full">Academic Jobs UK: Jobs in Academia by University </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/england/" className='text-[#f4a10c] font-bold'>England</Link></li>
                    <li><Link href="/employers/university-of-cambridge/12635/">University of
                      Cambridge</Link></li>
                    <li><Link href="/employers/university-of-oxford/3099/">University of
                      Oxford</Link>
                    </li>
                    <li><Link href="/employers/university-college-london/12527/">University
                      College London</Link>
                    </li>
                    <li><Link href="/employers/imperial-college-london/3129/">Imperial
                      College London</Link></li>
                    <li><Link href="/employers/london-school-of-economics-and-political-science/3153/">London School
                      of Economics and Political Science</Link>
                    </li>
                    <li><Link href="/employers/university-of-manchester/3833/">University of
                      Manchester</Link></li>
                    <li><Link href="/employers/university-of-birmingham/12614/">University of
                      Birmingham</Link></li>
                    <li><Link href="/employers/university-of-leeds/12797/">University of
                      Leeds</Link>
                      <li><Link href="/employers/king's-college-london/13540/" >King's College London</Link></li>
                      <li><Link href="/employers/durham-university/13541/" >Durham University</Link></li>
                      <li><Link href="/employers/university-of-bristol/13542/" >University of Bristol</Link></li>
                      <li><Link href="/employers/university-of-exeter/13543/" >University of Exeter</Link></li>
                      <li><Link href="/employers/university-of-liverpool/13544/" >University of Liverpool</Link></li>
                      <li><Link href="/employers/university-of-nottingham/13545/" >University of Nottingham</Link></li>
                      <li><Link href="/employers/queen-mary-university-of-london/13546/" >Queen Mary University of London</Link></li>
                      <li><Link href="/employers/university-of-sheffield/13547/" >University of Sheffield</Link></li>
                      <li><Link href="/employers/university-of-southampton/13548/" >University of Southampton</Link></li>
                      <li><Link href="/employers/university-of-warwick/13549/" >University of Warwick</Link></li>
                      <li><Link href="/employers/university-of-york/13550/" >University of York</Link></li>
                      <li><Link href="/employers/university-of-newcastle/13551/" >University of Newcastle</Link></li>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/scotland/" className='text-[#f4a10c] font-bold'>Scotland</Link></li>
                    <li><Link href="/employers/university-of-edinburgh/12681/">University of
                      Edinburgh</Link></li>
                    <li><Link href="/employers/university-of-glasgow/12713/">University of
                      Glasgow</Link>
                    </li>
                    <li><Link href="/employers/university-of-aberdeen/12555/">University of
                      Aberdeen</Link></li>
                    <li><Link href="/employers/university-of-st-andrews/13005/">University of
                      St Andrews</Link></li>
                    <li><Link href="/employers/university-of-dundee/12669/">University of
                      Dundee</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/wales/" className='text-[#f4a10c] font-bold'>Wales</Link></li>
                    <li><Link href="/employers/cardiff-university/6252/">Cardiff
                      University</Link>
                    </li>
                    <li><Link href="/employers/swansea-university/10538/">Swansea
                      University</Link>
                    </li>
                    <li><Link href="/employers/aberystwyth-university/13115/">Aberystwyth
                      University</Link></li>
                    <li><Link href="/employers/bangor-university/13116/">Bangor
                      University</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/northern-ireland/" className='text-[#f4a10c] font-bold'>Northern Ireland</Link></li>
                    <li><Link href="/employers/queens-university-belfast/10799/">Queen's
                      University Belfast</Link>
                    </li>
                    <li><Link href="/employers/ulster-university/13098/">Ulster
                      University</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}
