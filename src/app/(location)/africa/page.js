//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs Africa',
  },
  description:
    'Find your dream academic job in Africa and join the leading universities at Africa university jobs with professor, researcher or manager roles.',
  keywords: 'Academic Jobs Africa, academic jobs in Africa, Africa university jobs',
};
export default function Page() {
  return (
    <div>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-africa-min.png"

          alt="AcademicJobs Africa Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        /></div>
      <JobSearchBox l="Africa"/>

     
      <h3 className="text-center "> We Are Africa's University Job Website</h3>
     
     
      <div className=" mt-[5rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link href="/Africa/lecturer/" >	Lecturer</Link></li>
            <li><Link href="/Africa/research/" >	Research </Link></li>
            <li><Link href="/Africa/professor/" >	Professor</Link></li>
          </ul>
          <li><Link href="/Africa/executive/" >	Executive</Link></li>
          <li><Link href="/Africa/admin/" >Admin</Link></li>
          <li><Link href="/Africa/hr-jobs/" >	HR</Link></li>
          <li><Link href="/Africa/student/" >	Student</Link></li>

        </ul>
      </div>


      <div className=" mt- " >
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
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">ACADEMIC&nbsp;JOBS Africa:</span> 
          </h1> 
          
        <div>
        
        <p className="px-7 mb-4 mt-1">
        Explore what academic positions the United Kingdom has to offer through Academic Jobs! We value the importance of an easy to navigate website where your future academic career path is one click away. Academic Jobs provides an extensive list of opportunities for the future of your career in education, carefully sectioning the top Higher Ed jobs to curate the best fitting position for you. </p>
        <p className="px-7">
        The number 1 job board for academia in Africa can help you find your perfect academic job through our services. At Academic Jobs, we value our customers' interests by providing the best career choices possible, making us the best job board for higher education positions globally! </p>
      
        </div>
      </div>
      



      {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}
      {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl shadow-xl">Academic Jobs Africa: The Best Uni Jobs</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic Jobs Africa is a platform that connects you with the best academic employers and candidates. You can browse through hundreds of job listings in various disciplines and fields, such as engineering, health sciences, humanities, social sciences, education, and more. You can also filter your search by country, region, institution type, salary range, and contract duration.</p>
              <p className="font-semibold"></p> */}
            </div>
          {/* </div> */}
          {/* <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1"> */}

            
              <div>
              <h2 className="underline-full">Academic Jobs Africa University List</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/egypt/" className='text-[#f4a10c] font-bold'>Egypt</Link></li>
                  <li><Link href="/employers/cairo-university/6226/">Cairo
                    University</Link>
                  </li>
                  <li><Link href="/employers/american-university-in-cairo/5798/">American
                    University in Cairo</Link>
                  </li>
                  <li><Link href="/employers/alexandria-university/5713/">Alexandria
                    University</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/south-africa/" className='text-[#f4a10c] font-bold'>South Africa</Link></li>
                  <li><Link href="/employers/university-of-cape-town/12637/">University of
                    Cape Town</Link></li>
                  <li><Link href="/employers/university-of-the-witwatersrand/13133/">University of
                    the Witwatersrand</Link></li>
                  <li><Link href="/employers/stellenbosch-university/13008/">Stellenbosch
                    University</Link></li>
                  <li><Link href="/employers/university-of-pretoria/12935/">University of
                    Pretoria</Link></li>
                  <li><Link href="/employers/university-of-kwazulu-natal/12787">University of
                    KwaZulu-Natal</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/nigeria/" className='text-[#f4a10c] font-bold'>Nigeria</Link></li>
                  <li><Link href="/employers/university-of-ibadan/12743/">University of
                    Ibadan</Link>
                  </li>
                  <li><Link href="/employers/ahmadu-bello-university/6388/">Ahmadu Bello
                    University</Link></li>
                  <li><Link href="/employers/university-of-lagos/12789/">University of
                    Lagos</Link>
                  </li>
                  <li><Link href="/employers/obafemi-awolowo-university/9482/">Obafemi
                    Awolowo University</Link>
                  </li>
                  <li><Link href="/employers/university-of-nigeria-nsukka/12881/">University of
                    Nigeria, Nsukka</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/kenya/" className='text-[#f4a10c] font-bold'>Kenya</Link></li>
                  <li><Link href="/employers/university-of-nairobi/12866/">University of
                    Nairobi</Link>
                  </li>
                  <li><Link href="/employers/kenyatta-university/8470/">Kenyatta
                    University</Link>
                  </li>
                  <li><Link href="/employers/strathmore-university/10485/">Strathmore
                    University</Link>
                  </li>
                  <li><Link href="/employers/moi-university/9051/">Moi
                    University</Link>
                  </li>
                  <li><Link href="/employers/egerton-university/7048/">Egerton
                    University</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/morocco/" className='text-[#f4a10c] font-bold'>Morocco</Link></li>
                  <li><Link href="/employers/university-mohammed-v-of-rabat/12453/">University
                    Mohammed V of Rabat</Link></li>
                  <li><Link href="/employers/cadi-ayyad-university/12262/">Cadi Ayyad
                    University</Link>
                  </li>
                  <li><Link href="/employers/hassan-ii-university-of-casablanca/12426/">Hassan II
                    University of Casablanca</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/ghana/" className='text-[#f4a10c] font-bold'>Ghana</Link></li>
                  <li><Link href="/employers/university-of-ghana/12711/">University of
                    Ghana</Link>
                  </li>
                  <li><Link href="/employers/kwame-nkrumah-university-of-science-and-technology/8649/">Kwame Nkrumah
                    University of Science and Technology</Link>
                  </li>
                  <li><Link href="/employers/university-of-cape-coast/12636/">University of
                    Cape Coast</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/senegal/" className='text-[#f4a10c] font-bold'>Senegal</Link></li>
                  <li><Link href="/employers/cheikh-anta-diop-university/12272/">Cheikh Anta
                    Diop University</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/tunisia/" className='text-[#f4a10c] font-bold'>Tunisia</Link></li>
                  <li><Link href="/employers/university-of-tunis-el-manar/12393/">University of
                    Tunis El Manar</Link>
                  </li>
                  <li><Link href="/employers/university-of-sfax/12370/">University of
                    Sfax</Link>
                  </li>
                  <li><Link href="/employers/university-of-carthage/12303/">University of
                    Carthage</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 mt-4 '><Link href="/jobs/uganda/" className='text-[#f4a10c] font-bold'>Uganda</Link></li>
                  <li><Link href="/employers/makerere-university/8875/">Makerere
                    University</Link>
                  </li>
                  <li><Link href="/employers/uganda-martyrs-university/10962/">Uganda
                    Martyrs University</Link>
                  </li>
                  <li><Link href="/employers/kyambogo-university/8660/">Kyambogo
                    University</Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>

         
  )
}