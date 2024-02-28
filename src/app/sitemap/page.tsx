import type { Metadata } from 'next';
import Link from 'next/link';
import category from '@/data/category.json';
import position from '@/data/position.json';
import hr from '@/data/hr.json';
import research from '@/data/research.json';
import lecturer from '@/data/lecturer.json';
import industry from '@/data/industry.json';
import executive from '@/data/executive.json';
import student from '@/data/student.json';
import admin from '@/data/admin.json';
import professor from '@/data/professor.json';
import { regionData as asiaPositions } from '@/data/asiaPositions';
import { regionData as africaPositions } from '@/data/africaPositions';
import { regionData as canadaPositions } from '@/data/canadaPositions';
import { regionData as europePositions } from '@/data/europePositions';
import { regionData as indiaPositions } from '@/data/indiaPositions';
import { regionData as middleeastPositions } from '@/data/middleeastPositions';
import { regionData as newzealandPositions } from '@/data/newzealandPositions';
import { regionData as southamericaPositions } from '@/data/southamericaPositions';
import { regionData as ukPositions } from '@/data/ukPositions';
import USA from '@/components/topUnis/USA';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Sitemap Academic Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover academic job board sitemap committed to equity and accessibility, with thousands of jobs to explore ',
  keywords: 'Sitemap Academic Jobs, AcademicJobs Sitemap',
};
export default function myPage() {
  return (
    <>
      <div className="w-full h-full text-2xl pd-1 space-y-6">
        <div className="blurb text-left py-8 text-2xl">
          <h1 className="bg-[#f4a10c] text-white rounded-3xl font-bold mb-2 text-lg md:text-2xl px-7">
            AcademicJobs Sitemap
          </h1>
          <div className="newLine mb-4">
            <p className="font-semibold"></p>
            <p className="font-semibold"></p>
          </div>
          <div className="newLine">
            <p className="px-7 ">
              The sitemap of Academic Job provides an overview of the pages and
              links on the website. Whether you are a job seeker or an employer,
              you can find everything.
            </p>
            <p className=""></p>
          </div>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            University Articles
          </h2>
          <div className=" text-left  grid grid-cols-1 md:grid-cols-4  py-2 px-7 gap-4">
            <Link href="/company/3604/boston-college/" className="">
              Boston College
            </Link>
            <Link href="/company/3285/northeastern-university/" className="">
              Northeastern University
            </Link>
            <Link
              href="/company/3396/university-of-massachusetts-amherst/"
              className=""
            >
              University of Massachusetts Amherst
            </Link>
            <Link href="/company/3460/tufts-university/" className="">
              {' '}
              Tufts University
            </Link>
            <Link href="/company/3190/boston-university/" className="">
              Boston University
            </Link>
          </div>
        </div>

        <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
          Top Universities To Work For
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-6 py-2 px-7">
              <div className="column">
                <ul className="">
                  <li className="mb-2 mt-4">
                    <Link
                      href="/employers/queensland-university-of-technology-qut-/3786/"
                      className="text-[#003463] font-bold mb-2"
                    >
                      Queensland University of Technology (QUT)
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/find-jobs/QUT-lecturing/">
                        QUT Lecturing Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/QUT-research/">
                        QUT Research Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/QUT-professor/">
                        QUT Professorial Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/QUT-university-Executive/">
                        QUT Executive
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/QUT-university-Administration/">
                        QUT Administration
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/QUT-university-Human-Resources/">
                        QUT Human Resources
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="column">
                <ul className="">
                  <li className="mb-2 mt-4">
                    <Link
                      href="/employers/bond-university/3785/"
                      className="text-[#f1b821] font-bold mb-2"
                    >
                      Bond University
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/find-jobs/bond-university-lecturing/">
                        Bond Lecturing Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/bond-university-research/">
                        Bond Research Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/bond-university-professor/">
                        Bond Professorial Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/bond-university-Executive/">
                        Bond Executive
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/bond-university-Administration/">
                        Bond Administration
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/bond-university-Human-Resources/">
                        Bond Human Resources
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="column">
                <ul className="">
                  <li className="mb-2 mt-4">
                    <Link
                      href="/employers/harvard-university/3100/"
                      className="text-[#A51C30] font-bold mb-2"
                    >
                      Harvard University
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/find-jobs/harvard-university-lecturing/">
                        Harvard Lecturing Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/harvard-university-research/">
                        Harvard Research Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/harvard-university-professor/">
                        Harvard Professorial Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/harvard-university-Executive/">
                        Harvard Executive
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/harvard-university-Administration/">
                        Harvard Administration
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/harvard-university-Human-Resources/">
                        Harvard Human Resources
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="column">
                <ul className="">
                  <li className="mb-2 mt-4">
                    <Link
                      href="/employers/university-of-california-san-diego/3149/"
                      className="text-[#192847] font-bold mb-2"
                    >
                      University of California San Diego
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/find-jobs/UCSD-lecturing/">
                        UCSD Lecturing Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/UCSD-research/">
                        UCSD Research Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/UCSD-professor/">
                        UCSD Professorial Jobs
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/UCSD-university-Executive/">
                        UCSD Executive
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/UCSD-university-Administration/">
                        UCSD Administration
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/find-jobs/UCSD-university-Human-Resources/">
                        UCSD Human Resources
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
          <Link href="/the-university-rankings/">
            The University Rankings/ Top Academic Careers
          </Link>
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-6 py-2 px-7 ">
              <div className="column">
                <ul className="">
                  <ul className="pb-4">
                    <li className="pb-6">
                      <Link href="/employers/harvard-university/3100/">
                        {' '}
                        Harvard University
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/stanford-university/3101/">
                        {' '}
                        Stanford University
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/university-of-cambridge/12635/">
                        {' '}
                        University of Cambridge
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/massachusetts-institute-of-technology/3103/">
                        MIT
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/university-of-california-berkeley/3105/">
                        {' '}
                        University of California, Berkeley
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/employers/princeton-university/3104/">
                        {' '}
                        Princeton University
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/university-of-oxford/3099/">
                        {' '}
                        University of Oxford
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/columbia-university/3127/">
                        {' '}
                        Columbia University
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/caltech/3128/">Caltech</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/University-of-Chicago/3126/">
                        {' '}
                        University of Chicago
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/employers/yale-university/3125/">
                        {' '}
                        Yale University
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/Cornell-University/3138/">
                        Cornell University
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/university-of-california-los-angeles/3136/">
                        UCLA
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/university-of-pennsylvania/3131/">
                        UPenn
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/johns-hopkins-university/3130/">
                        Johns Hopkins University (JHU)
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="column">
                <ul className="">
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/employers/university-college-london/12527/">
                        University College London (UCL)
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/university-of-tokyo/3155/">
                        The University of Tokyo (UTokyo)
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/new-york-university-nyu/3144/">
                        New York University (NYU)
                      </Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/employers/duke-university/3139/">
                        {' '}
                        Duke University (Duke)
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
          Top Cities for Uni Jobs
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-8 py-2 px-7">
           
            <USA heading="UNITED STATES" />

              <div className="column">
                <ul className="">
                  <li className="mb-2 mt-4">
                    <Link
                      href="/australia/"
                      className="text-[#f4a10c] font-bold mb-2"
                    >
                      australia
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/melbourne/">Melbourne</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/sydney/">Sydney</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/brisbane/">Brisbane</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/gold-coast/">Gold Coast</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/canberra/">Canberra</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/perth/">Perth</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/adelaide/">Adelaide</Link>
                    </li>
                  </ul>
                  <li className="mb-2 mt-4">
                    <Link href="/uk/" className="text-[#f4a10c] font-bold mb-2">
                      uk
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/london/">London</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/edinburgh/">Edinburgh</Link>
                    </li>

                    <li className="pb-6">
                      <Link href="/manchester/">Manchester</Link>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="column">
                <ul className="">
                  <li className="mb-2 mt-4">
                    <Link
                      href="/canada/"
                      className="text-[#f4a10c] font-bold mb-2"
                    >
                      canada
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/toronto/">Toronto</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/vancouver/">Vancouver</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/montreal/">Montreal</Link>
                    </li>
                  </ul>

                  <li className="mb-2 mt-4">
                    <Link
                      href="/asia/"
                      className="text-[#f4a10c] font-bold mb-2"
                    >
                      asia
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/hong-kong/">Hong Kong</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/beijing/">Beijing</Link>
                    </li>

                    <li className="pb-6">
                      <Link href="/tokyo/">Tokyo</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/singapore/">Singapore</Link>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="column">
                <ul className="">
                  <li className="mb-2 mt-4">
                    <Link
                      href="/europe/"
                      className="text-[#f4a10c] font-bold mb-2"
                    >
                      europe
                    </Link>
                  </li>
                  <ul className="innerUL">
                    <li className="pb-6">
                      <Link href="/paris/">Paris</Link>
                    </li>

                    <li className="pb-6">
                      <Link href="/zurich/">Zurich</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/munich/">Munich</Link>
                    </li>

                    <li className="pb-6">
                      <Link href="/amsterdam/">Amsterdam</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/copenhagen/">Copenhagen</Link>
                    </li>
                    <li className="pb-6">
                      <Link href="/stockholm/">Stockholm</Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col  ">
          <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
            {category.map(({ Title, Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/faculty/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/professor/">Find Professor Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {professor.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/professor/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/lecturer/">Find Lecturer Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {lecturer.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/lecturer/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/research/">Find Research Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {research.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/research/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/position/">Find Academic Positions / Roles</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {position.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/position/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/executive/">Find Academic Executive jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
            {executive.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/executive/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/admin/">Find University Admin/Support jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
            {admin.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/admin/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/hr-jobs/">Find Academic HR jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
            {hr.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/hr-jobs/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/student/">Find Student jobs on Campus</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
            {student.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/student/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/industry/">Find Academic Industry jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
            {industry.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/industry/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/faculty/">
              Choose Higher Ed Job faculty / Specialty
            </Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
            {category.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/faculty/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/uk/">Find uk Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {ukPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/uk/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/south-america/">Find South America Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {southamericaPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/south-america/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/new-zealand/">Find New Zealand Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {newzealandPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/new-zealand/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/middle-east/">Find Middle East Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {middleeastPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/middle-east/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/india/">Find india Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {indiaPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/india/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/europe/">Find europe Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {europePositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/europe/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/canada/">Find canada Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {canadaPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/canada/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/africa/">Find africa Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {africaPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/africa/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col  ">
          <h2 className="text-1xl font-bold mb-2 py-1 px-7 bg-[#f4a10c] text-white rounded-3xl mt-20 ">
            <Link href="/asia/">Find asia Jobs</Link>
          </h2>
          <ul className=" mb-8 text-left xs:columns-1 sm:columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize ">
            {asiaPositions.map(({ Name }, key) => (
              <li
                className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
                key={key}
              >
                <Link href={`/asia/${Name?.replace(/\s+/g, '-')}/`}>
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold mb-2 text-xl md:text-xl lg:text-xl text-transform: uppercase">
          Academic Jobs australia
        </h2>
        <div className=" mt-[1rem] pb-8">
          <ul className="faculty-container flex flex-wrap gap-6 items-center justify-center text-[#f4a10c] ">
            <ul className="w-full  md:w-auto flex items-center  justify-center gap-6">
              <li className="">
                <a href="/australia/lecturer/"> Lecturer</a>
              </li>
              <li className="">
                <a href="https://www.academicjobs.com/australia/research/">
                  {' '}
                  Research{' '}
                </a>
              </li>
              <li className=" ">
                <a href="https://www.academicjobs.com/australia/professor/">
                  {' '}
                  Professor
                </a>
              </li>
            </ul>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/australia/executive/">
                {' '}
                Executive
              </a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/australia/admin/">Admin</a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/australia/hr-jobs/"> HR</a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/australia/student/">
                {' '}
                Student
              </a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/online/"> Online </a>
            </li>
          </ul>
        </div>

        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold mb-2 text-xl md:text-xl lg:text-xl text-transform: uppercase">
          usa Academic Jobs Online
        </h1>
        <div className=" mt-[1rem] pb-8">
          <ul className="faculty-container flex flex-wrap gap-6 items-center justify-center text-[#f4a10c] ">
            <ul className="w-full  md:w-auto flex items-center  justify-center gap-6">
              <li className="pb-6">
                <a href="/usa/lecturer/"> Lecturer</a>
              </li>
              <li className="pb-6">
                <a href="https://www.academicjobs.com/usa/research/">
                  {' '}
                  Research{' '}
                </a>
              </li>
              <li className="pb-6">
                <a href="https://www.academicjobs.com/usa/professor/">
                  {' '}
                  Professor
                </a>
              </li>
            </ul>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/usa/executive/">
                {' '}
                Executive
              </a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/usa/admin/">Admin</a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/usa/hr-jobs/"> HR</a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/usa/student/"> Student</a>
            </li>
            <li className="pb-6">
              <a href="https://www.academicjobs.com/online/"> Online </a>
            </li>
          </ul>
        </div>

        <div className="region-container bg-white">
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            UNITED STATES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">California</li>
              <li className="pb-6">
                <Link href="/employers/stanford-university/3101/">
                  Stanford University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/california-institute/4133/">
                  California Institute of Technology
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-san-francisco/3683/">
                  University of California - San Francisco
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-southern-california/3672/">
                  University of Southern California
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-berkeley/3105/">
                  University of California - Berkeley
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-los-angeles/3136/">
                  University of California - Los Angeles
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-san-diego/3149/">
                  University of California - San Diego
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-davis/3498/">
                  University of California - Davis
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-irvine/3689/">
                  University of California - Irvine
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-santa-barbara/5407/">
                  University of California - Santa Barbara
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-santa-cruz/3252/">
                  University of California - Santa Cruz
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-riverside/3268/">
                  University of California - Riverside
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/california-state-university-stanislaus/3414/">
                  California State University Stanislaus
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/cal-poly-pomona/3728/">
                  Cal Poly Pomona
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/california-state-university-monterey-bay/3313/">
                  California State University, Monterey Bay
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/caltech/3128/">Caltech</Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/grossmont-cuyamaca-community-college-district/3858/">
                  Grossmont–Cuyamaca Community College District
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/northeastern-university/3285/">
                  Northeastern University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/loyola-marymount-university/3637/">
                  Loyola Marymount University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/palomar-college/3612/">
                  Palomar College
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/san-diego-state-university/3693/">
                  San Diego State University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/saint-mary-s-college-of-california/3729/">
                  Saint Mary's College of California
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-california-office-of-the-president/3731/">
                  University of California Office of the President
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                Massachusetts
              </li>
              <li className="pb-6">
                <Link href="/employers/massachusetts-institute-of-technology/3103/">
                  Massachusetts Institute of Technology
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/harvard-university/3100/">
                  Harvard University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/boston-university/3190/">
                  Boston University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/boston-college/3604/">
                  Boston College
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/tufts-university/3460/">
                  Tufts University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/northeastern-university/3285/">
                  Northeastern University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/brandeis-university/3617/">
                  Brandeis University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/anna-jaques-hospital/3235/">
                  Anna Jaques Hospital
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/dana-farber-cancer-institute/3108/">
                  Dana-Farber Cancer Institute
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Georgia</li>
              <li className="pb-6">
                <Link href="/employers/emory-university/3372/">
                  Emory University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/georgia-institute-of-technology/3154/">
                  Georgia Institute of Technology
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Florida</li>
              <li className="pb-6">
                <Link href="/employers/university-of-miami/5475/">
                  University of Miami
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/miami-university/3350/">
                  Miami University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-florida/3394/">
                  University of Florida
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                North Carolina
              </li>
              <li className="pb-6">
                <Link href="/employers/duke-university/3139/">
                  Duke University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-north-carolina/5503/">
                  University of North Carolina
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/the-university-of-north-carolina-at-chapel-hill/3679/">
                  University of North Carolina at Chapel Hill
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-north-carolina-wilmington/3253/">
                  University of North Carolina Wilmington
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">New york</li>
              <li className="pb-6">
                <Link href="/employers/columbia-university/3127/">
                  Columbia University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/new-york-university-nyu/3144/">
                  New York University NYU
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/Cornell-University/3138/">
                  Cornell University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/Brown-University/3308/">
                  Brown University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/University-of-Rochester/5527/
                                                      "
                >
                  University of Rochester
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/fordham-university/3685/">
                  Fordham University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/hofstra-university/3545/">
                  Hofstra University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/princeton-university/3104/">
                  Princeton University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/rutgers-the-state-university-of-new-jersey/3255/">
                  Rutgers, The State University of New Jersey
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/st-john-s-university/3375/">
                  St. John's University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/stony-brook-university/3456/">
                  Stony Brook University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-at-buffalo/3609/
                                  "
                >
                  {' '}
                  University at Buffalo
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                Pennsylvania
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-pennsylvania/3131/
                                                      "
                >
                  University of Pennsylvania
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/carnegie-mellon-university/3146/
                                                      "
                >
                  Carnegie Mellon University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/bucknell-university/3309/
                                      "
                >
                  Bucknell University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/duquesne-university/3330/
                      "
                >
                  Duquesne University
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Illinois</li>
              <li className="pb-6">
                <Link
                  href="/employers/University-of-Chicago/3126/
                                                      "
                >
                  University of Chicago
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/Northwestern-University/3143/
                                                      "
                >
                  Northwestern University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/northern-illinois-university/3415/
                                                          "
                >
                  Northern Illinois University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-illinois-at-urbana-champaign/3164/
                                                          "
                >
                  University of Illinois at Urbana-Champaign
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Michigan</li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-michigan/3142/
                                                              "
                >
                  University of Michigan
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/michigan-state-university/3654/
                                                                  "
                >
                  Michigan State University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/wayne-state-university/3499/
                                                                      "
                >
                  {' '}
                  Wayne State University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                {' '}
                All States
              </li>
              <li className="pb-6">
                <Link href="/employers/yale-university/3125/">
                  Yale University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-washington/3145/
                                      "
                >
                  University of Washington
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/johns-hopkins-university/3130/
                                                      "
                >
                  Johns Hopkins University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/dartmouth-college/3327/">
                  Dartmouth College
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/rice-university/5067/">
                  Rice University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/vanderbilt-university/5603/
                                                      "
                >
                  Vanderbilt University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/washington-university-in-st-louis/3655/
                                                      "
                >
                  Washington University in St. Louis
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-notre-dame/3879/
                                                      "
                >
                  University of Notre Dame
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-virginia/3484/
                                                      "
                >
                  University of Virginia
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/georgetown-University/3522/
                                                      "
                >
                  Georgetown University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-texas-at-austin/3166/
                                                      "
                >
                  University of Texas at Austin
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-wisconsin-madison/3404/
                                                      "
                >
                  University of Wisconsin - Madison
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-mississippi-medical-center/3109/
                                                      "
                >
                  University of Mississippi Medical Center
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-minnesota-twin-cities/3684/
                                                          "
                >
                  University of Minnesota Twin Cities
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/the-ohio-state-university/3669/
                                                              "
                >
                  {' '}
                  The Ohio State University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-cincinnati/3393/
                                                                  "
                >
                  {' '}
                  University of Cincinnati
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-tennessee-knoxville/3401/
                                                                  "
                >
                  {' '}
                  University of Tennessee, Knoxville
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-alabama-at-birmingham/3387/
                                                                          "
                >
                  {' '}
                  University of Alabama at Birmingham
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/indiana-university-purdue-university-indianapolis/3658/
                                                                                      "
                >
                  {' '}
                  indiana University Purdue University indianapolis
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/the-university-of-iowa/3483/
                                                                                          "
                >
                  {' '}
                  The University of Iowa
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-kentucky/3510/
                                                                                              "
                >
                  {' '}
                  University of Kentucky
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/oregon-state-university/3813/
                                                                                                  "
                >
                  {' '}
                  Oregon State University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-nebraska-medical-center/3712/
                                                                                                      "
                >
                  University of Nebraska Medical Center
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/washington-state-university/3722/
                                                                                                          "
                >
                  Washington State University
                </Link>
              </li>
              <li className="pb-6">
                <Link
                  href="/employers/university-of-maryland-baltimore-county/3775/
                                                                                                              "
                >
                  University of Maryland, Baltimore County
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="region-container">
          <div>
            <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
              AUSTRALIA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
              <ul>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">ACT</li>
                <li className="pb-6">
                  <Link href="/employers/australian-national-university/3739/">
                    australian National University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-canberra/3821/">
                    University of Canberra
                  </Link>
                </li>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                  New South Wales
                </li>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                  New South Wales
                </li>
                <li className="pb-6">
                  <Link
                    className="footer-nav__link"
                    href="/employers/the-university-of-sydney/3171/"
                  >
                    The University of Sydney
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-new-south-wales-unsw-/3738/">
                    University of New South Wales
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/charles-sturt-university/3855/">
                    Charles Sturt University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/australian-catholic-university/3853/">
                    australian Catholic University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/southern-cross-university/3862/">
                    Southern Cross University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-technology-sydney/3864/">
                    University of Technology, Sydney
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/macquarie-university/3881/">
                    Macquarie University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-new-england/3209/">
                    University of New England England
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-newcastle/3863/">
                    University of Newcastle
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-western-sydney/3865/">
                    University of Western Sydney
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-wollongong/3866/">
                    University of Wollongong
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">Victoria</li>
                <li className="pb-6">
                  <Link
                    href="/employers/university-of-melbourne/3170/
                                  "
                  >
                    The University of Melbourne
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/monash-university/3182/
                                  "
                  >
                    Monash University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/victoria-university/3871/
                              "
                  >
                    Victoria University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/university-of-divinity/3872/
                              "
                  >
                    University of Divinity
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/swimburne-university-of-technology/3870/
                              "
                  >
                    Swimburne University of Technology
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/rmit-university/3869/
                              "
                  >
                    RMIT University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/la-trobe-university/3868/
                              "
                  >
                    La Trobe University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/company/deakin-university/3856/
                              "
                  >
                    Deakin University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/federation-university/3787/
                              "
                  >
                    Federation University australia
                  </Link>
                </li>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">Tasmania</li>
                <li className="pb-6">
                  <Link
                    href="h/employers/university-of-tasmania/3867/
                              "
                  >
                    The University of Tasmania
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                  Queensland
                </li>
                <li className="pb-6">
                  <Link
                    href="/employers/bond-university/3785/
                              "
                  >
                    Bond University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-queensland/3172/">
                    The University of Queensland
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/cquniversity/3854/">CQUniversity</Link>
                </li>

                <li className="pb-6">
                  <Link href="/employers/griffith-university/3860/">
                    Griffith University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/james-cook-university/3857/">
                    James Cook University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-southern-queensland/3861/">
                    University of Southern Queensland
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/queensland-university-of-technology-qut-/3786/">
                    Queensland University of Technology
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-sunshine-coast/3859/">
                    University of Sunshine Coast
                  </Link>
                </li>
                <li className="mb-2 ">
                  <Link
                    href="/find-jobs/northern-territory/"
                    className="text-[#f4a10c] font-bold mb-2"
                  >
                    Northern Territory
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/charles-darwin-university/3880/">
                    Charles Darwin University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                  South australia
                </li>
                <li className="pb-6">
                  <Link href="/employers/the-university-of-adelaide/3737/">
                    The University of Adelaide
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/carnegie-mellon-university/3146/">
                    Carnegie Mellon University
                  </Link>{' '}
                </li>
                <li className="pb-6">
                  <Link href="/employers/torrens-university-australia/3875/">
                    Torrens University australia
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-south-australia/3874/">
                    University of South australia
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/flinders-university/3873/">
                    Flinders University
                  </Link>
                </li>
                <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                  Western australia
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-western-australia/3173/">
                    The University of Western australia
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/university-of-notre-dame/3879/">
                    University of Notre Dame
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/murdoch-university/3878/">
                    Murdoch University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/edith-cowan-university/3877/">
                    Edith Cowan University
                  </Link>
                </li>
                <li className="pb-6">
                  <Link href="/employers/curtin-university/3876/">
                    Curtin University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            AFRICA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Egypt</li>
              <li className="pb-6">
                <Link href="/employers/cairo-university/6226/">
                  Cairo University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/american-university-in-cairo/5798/">
                  American University in Cairo
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/alexandria-university/5713/">
                  Alexandria University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                South africa
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-cape-town/12637/">
                  University of Cape Town
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-the-witwatersrand/13133/">
                  University of the Witwatersrand
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/stellenbosch-university/13008/">
                  Stellenbosch University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-pretoria/12935/">
                  University of Pretoria
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/12787/university-of-kwazulu-natal/">
                  University of KwaZulu-Natal
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Nigeria</li>
              <li className="pb-6">
                <Link href="/employers/university-of-ibadan/12743/">
                  University of Ibadan
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/ahmadu-bello-university/6388/">
                  Ahmadu Bello University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-lagos/12789/">
                  University of Lagos
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/obafemi-awolowo-university/9482/">
                  Obafemi Awolowo University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-nigeria-nsukka/12881/">
                  University of Nigeria, Nsukka
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Kenya</li>
              <li className="pb-6">
                <Link href="/employers/university-of-nairobi/12866/">
                  University of Nairobi
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/kenyatta-university/8470/">
                  Kenyatta University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/strathmore-university/10485/">
                  Strathmore University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/moi-university/9051/">
                  Moi University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/egerton-university/7048/">
                  Egerton University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Morocco</li>
              <li className="pb-6">
                <Link href="/employers/university-mohammed-v-of-rabat/12453/">
                  University Mohammed V of Rabat
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/cadi-ayyad-university/12262/">
                  Cadi Ayyad University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/hassan-ii-university-of-casablanca/12426/">
                  Hassan II University of Casablanca
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Ghana</li>
              <li className="pb-6">
                <Link href="/employers/university-of-ghana/12711/">
                  University of Ghana
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/kwame-nkrumah-university-of-science-and-technology/8649/">
                  Kwame Nkrumah University of Science and Technology
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-cape-coast/12636/">
                  University of Cape Coast
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Senegal</li>
              <li className="pb-6">
                <Link href="/employers/cheikh-anta-diop-university/12272/">
                  Cheikh Anta Diop University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Tunisia</li>
              <li className="pb-6">
                <Link href="/employers/university-of-tunis-el-manar/12393/">
                  University of Tunis El Manar
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-sfax/12370/">
                  University of Sfax
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-carthage/12303/">
                  University of Carthage
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Uganda</li>
              <li className="pb-6">
                <Link href="/employers/makerere-university/8875/">
                  Makerere University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/uganda-martyrs-university/10962/">
                  Uganda Martyrs University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/kyambogo-university/8660/">
                  Kyambogo University
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            ASIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Singapore</li>
              <li className="pb-6">
                <Link href="/employers/nanyang-technological-university-singapore/3152/">
                  Nanyang Technological University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/national-university-of-singapore/3137/">
                  National University of Singapore
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Malaysia</li>
              <li className="pb-6">
                <Link href="/employers/universiti-ualaya/12499/">
                  Universiti Malaya (UM)
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">China</li>
              <li className="pb-6">
                <Link href="/employers/peking-university/3133/">
                  Peking University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/tsinghua-university/3840/">
                  Tsinghua University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/fudan-university/7289/">
                  Fudan University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/shanghai-jiao-tong-university/6876/">
                  Shanghai Jiao Tong University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Japan</li>
              <li className="pb-6">
                <Link href="/employers/university-of-tokyo/3155/">
                  University of Tokyo
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Indonesia</li>
              <li className="pb-6">
                <Link href="/employers/the-university-of-indonesia/12068/">
                  The University of Indonesia
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Thailand</li>
              <li className="pb-6">
                <Link href="/employers/chulalongkorn-university/6615/">
                  Chulalongkorn University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Hong Kong</li>
              <li className="pb-6">
                <Link href="/employers/university-of-hong-kong/3148/">
                  University of Hong Kong
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/chinese-university-of-hong-kong/3161/">
                  Chinese University of Hong Kong
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/the-hong-kong-university-of-science-and-technology/3843/">
                  The Hong Kong University of Science and Technology
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                South Korea
              </li>
              <li className="pb-6">
                <Link href="/employers/seoul-national-university/10119/">
                  Seoul National University
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            CANADA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Alberta</li>
              <li className="pb-6">
                <Link href="/employers/university-of-alberta/3837/">
                  University of Alberta
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-calgary/12631/">
                  University of Calgary
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Quebec</li>
              <li className="pb-6">
                <Link href="/employers/mcgill-university/3162/">
                  McGill University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/universite-de-montreal/3836/">
                  Universite De Montreal
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-waterloo/3838/">
                  University of Waterloo
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/laval-university/12443">
                  Laval University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Ontario</li>
              <li className="pb-6">
                <Link href="/employers/university-of-toronto//3134/">
                  University of Toronto
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-british-columbia/3157/">
                  University of British Columbia
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/simon-fraser-university/10280/">
                  Simon Fraser University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/mcmaster-university/3835/">
                  McMaster University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="pb-6">
                <Link href="/employers/university-of-ottawa/12910/">
                  University of Ottawa
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/york-university/13421/">
                  York University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/queens-university/9836/">
                  Queen's University
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            UNITED KINGDOM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">England</li>
              <li className="pb-6">
                <Link href="/employers/university-of-cambridge/12635/">
                  University of Cambridge
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-oxford/3099/">
                  University of Oxford
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-college-london/12527/">
                  University College London
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/imperial-college-london/3129/">
                  Imperial College London
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/london-school-of-economics-and-political-science/3153/">
                  London School of Economics and Political Science
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-manchester/3833/">
                  University of Manchester
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-birmingham/12614/">
                  University of Birmingham
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-leeds/12797/">
                  University of Leeds
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Scotland</li>
              <li className="pb-6">
                <Link href="/employers/university-of-edinburgh/12681/">
                  University of Edinburgh
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-glasgow/12713/">
                  University of Glasgow
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-aberdeen/12555/">
                  University of Aberdeen
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-st-andrews/13005/">
                  University of St Andrews
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-dundee/12669/">
                  University of Dundee
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Wales</li>
              <li className="pb-6">
                <Link href="/employers/cardiff-university/6252/">
                  Cardiff University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/swansea-university/10538/">
                  Swansea University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/aberystwyth-university/13115/">
                  Aberystwyth University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/bangor-university/13116/">
                  Bangor University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                Northern Ireland
              </li>
              <li className="pb-6">
                <Link href="/employers/queens-university-belfast/10799/">
                  Queen's University Belfast
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/ulster-university/13098/">
                  Ulster University
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            SOUTH AMERICA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Brazil</li>
              <li className="pb-6">
                <Link href="/employers/university-of-sao-paulo/11463/">
                  University of São Paulo
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-campinas/11490/">
                  University of Campinas
                </Link>
              </li>

              <li className="pb-6">
                <Link href="/employers/universidade-federal-do-rio-grande-do-sul/11544/">
                  Universidade Federal do Rio Grande do Sul
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Argentina</li>
              <li className="pb-6">
                <Link href="/employers/universidad-de-buenos-aires/11196/">
                  Universidad de Buenos Aires
                </Link>
              </li>

              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Colombia</li>
              <li className="pb-6">
                <Link href="/employers/universidad-de-los-andes/11308/">
                  Universidad de los Andes
                </Link>
              </li>

              <li className="pb-6">
                <Link href="/employers/icesi-university/11648/">
                  Icesi University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Chile</li>
              <li className="pb-6">
                <Link href="/employers/pontificia-universidad-catolica-de-chile/9739/">
                  Pontificia Universidad Catolica de Chile
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/universidad-alberto-hurtado/11012/">
                  Universidad Alberto Hurtado
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/universidad-de-santiago-de-chile/11384/">
                  Universidad de Santiago de Chile
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-antofagasta/11189/">
                  University of Antofagasta
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Peru</li>
              <li className="pb-6">
                <Link href="/employers/universidad-alas-peruanas/11010/">
                  Universidad Alas Peruanas
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/universidad-peruana-cayetano-heredia/11856/">
                  Universidad Peruana Cayetano Heredia
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            NEW ZEALAND
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                North Island
              </li>
              <li className="pb-6">
                <Link href="/employers/the-university-of-auckland/3809/">
                  The University of Auckland
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/victoria-university-of-wellington/3807/">
                  Victoria University of Wellington
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/waikato-university/3806/">
                  Waikato University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/auckland-university-of-technology/3804/">
                  Auckland University of Technology (AUT)
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                South Island
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-otago/3805/">
                  University of Otago
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/lincoln-university/3808/">
                  Lincoln University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/massey-university/3810/">
                  Massey University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/university-of-canterbury/3811/">
                  University of Canterbury
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            MIDDLE EAST
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                Saudi Arabia
              </li>
              <li className="pb-6">
                <Link href="/employers/king-saud-university-saudi-arabia/8522/">
                  King Saud University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/king-abdullah-university-of-science-and-technology-saudi-arabia/8513/">
                  King Abdullah University of Science and Technology
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/king-abdul-aziz-university-saudi-arabia/8512/">
                  King Abdul Aziz University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">UAE</li>
              <li className="pb-6">
                <Link href="/employers/khalifa-university-uae/8481/">
                  Khalifa University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/united-arab-emirates-university-uae/10985/">
                  United Arab Emirates University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/american-university-in-dubai-uae/5799/">
                  American University in Dubai
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/american-university-of-sharjah-uae/5815/">
                  American University of Sharjah
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Lebanon</li>
              <li className="pb-6">
                <Link href="/employers/american-university-of-beirut-lebanon/5804/">
                  American University of Beirut
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Jordan</li>
              <li className="pb-6">
                <Link href="/employers/university-of-jordan-jordan/12763/">
                  University of Jordan
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Qatar</li>
              <li className="pb-6">
                <Link href="/employers/qatar-university-qatar/12944/">
                  Qatar University
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            INDIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Mumbai</li>
              <li className="pb-6">
                <Link href="/employers/indian-institute-of-technology-bombay/3844/">
                  indian Institute of Technology Bombay
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Chennai</li>
              <li className="pb-6">
                <Link href="/employers/indian-institute-of-technology-madras/3845/">
                  indian Institute of Technology Madras
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Vellore</li>
              <li className="pb-6">
                <Link href="/employers/vellore-institute-of-technology/3846/">
                  Vellore Institute of Technology
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Bangalore</li>
              <li className="pb-6">
                <Link href="/employers/indian-institute-of-science/7818/">
                  indian Institute of Science (IISc)
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Delhi</li>
              <li className="pb-6">
                <Link href="/employers/indian-institute-of-technology-delhi/7822/">
                  indian Institute of Technology Delhi
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold mb-2 py-3 px-7 bg-[#f4a10c] text-white rounded-3xl ">
            EUROPE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">France</li>
              <li className="pb-6">
                <Link href="/employers/paris-sciences-et-lettres/3163/">
                  Paris Sciences et Lettres
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/ecole-polytechnique/3158/">
                  Ecole Polytechnique
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Sweden</li>
              <li className="pb-6">
                <Link href="/employers/karolinska-institute/3165/">
                  Karolinska Institute
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Germany</li>
              <li className="pb-6">
                <Link href="/employers/heidelberg-university/3160/">
                  Heidelberg University
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/lmu-munich-ludwig-maximilians-universitat/3150/">
                  LMU Munich (Ludwig Maximilians Universität München)
                </Link>
              </li>
              <li className="pb-6">
                <Link href="/employers/technische-uiniversitat-munchen/10702/">
                  Technische Universität München
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Denmark</li>
              <li className="pb-6">
                <Link href="/employers/the-university-of-copenhagen/3156/">
                  University of Copenhagen
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                Switzerland
              </li>
              <li className="pb-6">
                <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Belgium</li>
              <li className="pb-6">
                <Link href="/employers/ku-leuven/3159/">KU Leuven</Link>
              </li>
            </ul>

            <ul>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">
                Netherlands
              </li>
              <li className="pb-6">
                <Link href="/employers/delft-university-of-technology/3847/">
                  Delft University of Technology
                </Link>
              </li>
              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Italy</li>
              <li className="pb-6">
                <Link href="/employers/University-of-Bologna/12015/">
                  University of Bologna
                </Link>
              </li>

              <li className="mb-2 text-[#f4a10c] font-bold mb-2">Spain</li>
              <li className="pb-6">
                <Link href="/employers/universitat-de-barcelona/12195/">
                  Universitat de Barcelona
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
