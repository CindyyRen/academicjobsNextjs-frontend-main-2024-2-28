// import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';


export const metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: "The Best Universities to Work for in South America", //Option 2 overrides the title in layout.tsx
  },
  description:
    'Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision.',
  keywords: 'Find Universities. Find employers, Find institutions',
};

const countryRegion = 'South America';
function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}
export default function myPage() {
  return (
   
 
    <main>
        {/* Hero banner */}
        <section>
          <div className="hero max-h-fit bg-slate-200 py-8 mx-auto">
            <div className="container mx-auto">
              <div className="hero-content flex-col xl:flex-row gap-8 mx-auto max-w-full">
                <Image
                  src="/academic-job-postings/university-of-oxford.jpg"
                  className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                  alt="South America Top Academic Employers"
                />
                <div>
                  <h1 className="text-3xl font-bold text-aj">
                  Find the best South American universities to work for here...
Use university rankings to search for jobs in higher education.

                  </h1>
            
                  <p className="py-1">
                  All academic positions in South America can be found through the No.1 job board, Academic Jobs. The 'find employers' page helps you explore all academic careers and current job openings, at the world’s top colleges and universities.</p>
              <p className="py-1">
              Our employer rankings help you to find amazing Higher Ed jobs at the university of your choice. You can see details about employers, like their mission, vision, values, history, achievements, and culture.
              </p>
              <p className="py-1">
              Use the South American university rankings in your search for the perfect academic job…</p>
                  <div className="card-actions flex ">
                <Link href="/academic-talent-pool" className="btn btn-aj">
                  Join our Talent Pool
                </Link>
                <Link
                  href="https://postmyjob.online/"
                  className="btn btn-aj"
                >
                  Create Institutional Profile
                </Link>
              </div>
                
                 
                </div>
              </div>
            </div>
          </div>
        </section>
       
       
        <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl max-w-screen-2xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
              <li className='mb-1 mt-4 '><Link href="/jobs/brazil/" className='text-[#f4a10c] font-bold'>Brazil</Link></li>
                    <li><Link href="/employers/university-of-sao-paulo/11463/">University of São Paulo</Link>
                    </li>
                    <li><Link href="/employers/university-of-campinas/11490/">University of Campinas</Link>
                    </li>

                    <li><Link href="/employers/universidade-federal-do-rio-grande-do-sul/11544/">Universidade Federal do Rio Grande do Sul</Link>
                    </li>

                  



                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/argentina/" className='text-[#f4a10c] font-bold'>Argentina</Link></li>
                    <li><Link href="/employers/universidad-de-buenos-aires/11196/">Universidad de Buenos
                      Aires</Link>
                    </li>

                    <li className='mb-1 mt-4 '><Link href="/jobs/colombia/" className='text-[#f4a10c] font-bold'>Colombia</Link></li>
                    <li><Link href="/employers/universidad-de-los-andes/11308/">Universidad de los
                      Andes</Link></li>

                    <li><Link href="/employers/icesi-university/11648/">Icesi University</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/chile/" className='text-[#f4a10c] font-bold'>Chile</Link></li>
                    <li><Link href="/employers/pontificia-universidad-catolica-de-chile/9739/">Pontificia Universidad
                      Catolica de Chile</Link></li>
                    <li><Link href="/employers/universidad-alberto-hurtado/11012/">Universidad Alberto
                      Hurtado</Link>
                    </li>
                    <li><Link href="/employers/universidad-de-santiago-de-chile/11384/">Universidad de
                      Santiago de Chile</Link></li>
                    <li><Link href="/employers/university-of-antofagasta/11189/">University of Antofagasta</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 mt-4 '><Link href="/jobs/peru/" className='text-[#f4a10c] font-bold'>Peru</Link></li>
                    <li><Link href="/employers/universidad-alas-peruanas/11010/">Universidad Alas
                      Peruanas</Link>
                    </li>
                    <li><Link href="/employers/universidad-peruana-cayetano-heredia/11856/">Universidad Peruana Cayetano Heredia</Link>
                    </li>
              </ul>
            </div>
          </div>
       
              <section>
          <h3 className="container mx-auto text-center py-8 px-4 items-end">
         {" "}
            <Link
              className="border rounded-3xl  p-4"
              href="/employers/"
            >
              View All 
            </Link>
          </h3>
        </section>
        {/* Contact us CTA */}
        <section className="container mx-auto px-4 mt-12">
          <div className="alert mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              ​​Try out Academic Jobs today, not because we are number 1 but for
              the best customer service and support you will ever experience.
            </span>
            <div>
              <Link href="/contact-us" className="btn btn-sm btn-aj">
                Experience the Difference
              </Link>
            </div>
          </div>
        </section>
    
        <section>
          <h3 className="container mx-auto text-center py-8 px-4 items-end">
            If you're interested in a great experience while saving time &
            money…{" "}
            <Link
              className="btn btn-aj"
              href="https://postmyjob.online/"
            >
              Post a Job Today
            </Link>
          </h3>
        </section>
      </main>
    
  );
};
