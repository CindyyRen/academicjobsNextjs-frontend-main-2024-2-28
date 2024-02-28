//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs Europe',
  },
  description:
    'Find your ideal academic job in Europe and join the vibrant academic community at Europe university jobs such teaching, research or innovative opportunities.',
  keywords: 'Academic Jobs Europe. academic jobs in Europe, Europe University Jobs',
};
export default function Page() {
  return (
    <div>
   <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-europe-min.png"

          alt="AcademicJobs Europe logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        /></div>
      <JobSearchBox l="Europe"/>

      <h3 className="text-center ">We Are Europe's University Job Website</h3>
      
      <div className=" mt-[5rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link href="/Europe/lecturer/" >	Lecturer</Link></li>
            <li><Link href="/Europe/research/" >	Research </Link></li>
            <li><Link href="/Europe/professor/" >	Professor</Link></li>
          </ul>
          <li><Link href="/Europe/executive/" >	Executive</Link></li>
          <li><Link href="/Europe/admin/" >Admin</Link></li>
          <li><Link href="/Europe/hr-jobs/" >	HR</Link></li>
          <li><Link href="/Europe/student/" >	Student</Link></li>

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
        
   
    
            
            
            
        <div id="section" className=" full-width py-4  full-width mb-[175px] bg-slate-200">
  <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
  <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
          <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">ACADEMIC&nbsp;JOBS Europe:</span> < br /> 
          </h1>
          
        <div>
        
        <p className="px-7 mb-4 mt-1">
        Discover what academic positions Europe has to offer through Academic Jobs! We value the importance of an easy to navigate website where your future academic career path is one click away. Academic Jobs provides an extensive list of opportunities for the future of your career in education, carefully sectioning the top Higher Ed jobs to curate the best fitting position for you.</p>
        <p className="px-7">
        The No.1 job board for academics in Europe, for all your university job requirements, from seeking to recruiting, look no further. At Academic Jobs, we value our customers' interests by providing the best career choices possible, making us the best job board for higher education positions globally.</p>
      
        </div>
      </div>
      </div>

      
      {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs Europe</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic Jobs board is a platform that connects academic universities, institutions and organizations with qualified candidates across Europe. You can browse through hundreds of University Jobs in various disciplines. Whether you are looking for a permanent or a temporary position, a full-time or a part-time role, our academic job board can help you find your dream job in Europe.</p>
              <p className="font-semibold"></p>
            </div> */}
          {/* </div> */}
          {/* <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div> */}
                    <h2 className="underline-full">AcademicJobs Europe: All Academic Positions by university  </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/france/" className='text-[#f4a10c] font-bold'>France</Link></li>
                    <li><Link href="/employers/paris-sciences-et-lettres/3163/">Paris

                      Sciences et Lettres</Link></li>
                    <li><Link href="/employers/ecole-polytechnique/3158/">Ecole Polytechnique</Link></li>
                    <li className='mb-1 mt-4 '><Link href="/jobs/sweden/" className='text-[#f4a10c] font-bold'>Sweden</Link></li>
                    <li><Link href="/employers/karolinska-institute/3165/">Karolinska Institute</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/germany/" className='text-[#f4a10c] font-bold'>Germany</Link></li>
                    <li><Link href="/employers/heidelberg-university/3160/">Heidelberg
                      University</Link></li>
                    <li><Link href="/employers/lmu-munich-ludwig-maximilians-universitat/3150/">LMU
                      Munich (Ludwig Maximilians Universität München)</Link></li>
                    <li><Link href="/employers/technische-uiniversitat-munchen/10702/">Technische Universität München</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/denmark/" className='text-[#f4a10c] font-bold'>Denmark</Link></li>
                    <li><Link href="/employers/the-university-of-copenhagen/3156/">University of
                      Copenhagen</Link>
                    </li>
                    <li className='mb-1 mt-4 '><Link href="/jobs/switzerland/" className='text-[#f4a10c] font-bold'>Switzerland</Link></li>
                    <li><Link href="/employers/eth-zurich/3132/">ETH
                      Zurich</Link></li>
                    <li className='mb-1 mt-4 '><Link href="/jobs/belgium/" className='text-[#f4a10c] font-bold'>Belgium</Link></li>
                    <li><Link href="/employers/ku-leuven/3159/">KU Leuven</Link></li>
                  </ul>


                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/netherlands/" className='text-[#f4a10c] font-bold'>Netherlands</Link></li>
                    <li><Link href="/employers/delft-university-of-technology/3847/">Delft University of Technology</Link>
                    </li>
                    <li className='mb-1 mt-4 '><Link href="/jobs/italy/" className='text-[#f4a10c] font-bold'>Italy</Link></li>
                    <li><Link href="/employers/University-of-Bologna/12015/">University of Bologna</Link></li>

                    <li className='mb-1 mt-4 '><Link href="/jobs/spain/" className='text-[#f4a10c] font-bold'>Spain</Link></li>
                    <li><Link href="/employers/universitat-de-barcelona/12195/">Universitat de Barcelona</Link></li>

                  </ul>

                </div>
              </div>
            </div>
         
  )
}
