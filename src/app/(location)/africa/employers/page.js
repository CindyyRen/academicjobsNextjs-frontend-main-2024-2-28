// import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';

export const metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'The Best Universities to Work for in Africa', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, Africa, or anywhere else, we have the information you need to make an informed decision.',
  keywords: 'Find Universities. Find employers, Find institutions',
};

const countryRegion = 'World';
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
                src="/academic-job-postings/africa-university-of-pretoria.jpg"
                className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                alt="Africa University of Pretoria"
              />
              <div>
                <h1 className="text-3xl font-bold text-aj">
                  Find the best Africa universities to work for here... Use
                  university rankings to search for jobs in higher education.
                </h1>

                <p className="py-1">
                  All edu jobs in Africa can be found through the No.1 job
                  board, Academic Jobs. The 'find employers' page helps you
                  explore all academic careers and current job openings, at the
                  world’s top colleges and universities.
                </p>
                <p className="py-1">
                  Our employer rankings help you to find amazing academic
                  positions at the university of your choice. You can see
                  details about employers, like their mission, vision, values,
                  history, achievements, and culture.
                </p>
                <p className="py-1">
                  Use the African university rankings in your search for the
                  perfect academic job…
                </p>
                <div className="card-actions flex ">
                  <Link href="/academic-talent-pool" className="btn btn-aj">
                    Join our Talent Pool
                  </Link>
                  <Link href="https://postmyjob.online/" className="btn btn-aj">
                    Create Institutional Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7  mb-16">
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Egypt</li>
            <li>
              <Link href="/employers/cairo-university/6226/">
                Cairo University
              </Link>
            </li>
            <li>
              <Link href="/employers/american-university-in-cairo/5798/">
                American University in Cairo
              </Link>
            </li>
            <li>
              <Link href="/employers/alexandria-university/5713/">
                Alexandria University
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">South Africa</li>
            <li>
              <Link href="/employers/university-of-cape-town/12637/">
                University of Cape Town
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-the-witwatersrand/13133/">
                University of the Witwatersrand
              </Link>
            </li>
            <li>
              <Link href="/employers/stellenbosch-university/13008/">
                Stellenbosch University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-pretoria/12935/">
                University of Pretoria
              </Link>
            </li>
            <li>
              <Link href="/employers/12787/university-of-kwazulu-natal/">
                University of KwaZulu-Natal
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Nigeria</li>
            <li>
              <Link href="/employers/university-of-ibadan/12743/">
                University of Ibadan
              </Link>
            </li>
            <li>
              <Link href="/employers/ahmadu-bello-university/6388/">
                Ahmadu Bello University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-lagos/12789/">
                University of Lagos
              </Link>
            </li>
            <li>
              <Link href="/employers/obafemi-awolowo-university/9482/">
                Obafemi Awolowo University
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-nigeria-nsukka/12881/">
                University of Nigeria, Nsukka
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Kenya</li>
            <li>
              <Link href="/employers/university-of-nairobi/12866/">
                University of Nairobi
              </Link>
            </li>
            <li>
              <Link href="/employers/kenyatta-university/8470/">
                Kenyatta University
              </Link>
            </li>
            <li>
              <Link href="/employers/strathmore-university/10485/">
                Strathmore University
              </Link>
            </li>
            <li>
              <Link href="/employers/moi-university/9051/">Moi University</Link>
            </li>
            <li>
              <Link href="/employers/egerton-university/7048/">
                Egerton University
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Morocco</li>
            <li>
              <Link href="/employers/university-mohammed-v-of-rabat/12453/">
                University Mohammed V of Rabat
              </Link>
            </li>
            <li>
              <Link href="/employers/cadi-ayyad-university/12262/">
                Cadi Ayyad University
              </Link>
            </li>
            <li>
              <Link href="/employers/hassan-ii-university-of-casablanca/12426/">
                Hassan II University of Casablanca
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Ghana</li>
            <li>
              <Link href="/employers/university-of-ghana/12711/">
                University of Ghana
              </Link>
            </li>
            <li>
              <Link href="/employers/kwame-nkrumah-university-of-science-and-technology/8649/">
                Kwame Nkrumah University of Science and Technology
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-cape-coast/12636/">
                University of Cape Coast
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Senegal</li>
            <li>
              <Link href="/employers/cheikh-anta-diop-university/12272/">
                Cheikh Anta Diop University
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Tunisia</li>
            <li>
              <Link href="/employers/university-of-tunis-el-manar/12393/">
                University of Tunis El Manar
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-sfax/12370/">
                University of Sfax
              </Link>
            </li>
            <li>
              <Link href="/employers/university-of-carthage/12303/">
                University of Carthage
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mb-1 mt-4 text-[#f4a10c] font-bold">Uganda</li>
            <li>
              <Link href="/employers/makerere-university/8875/">
                Makerere University
              </Link>
            </li>
            <li>
              <Link href="/employers/uganda-martyrs-university/10962/">
                Uganda Martyrs University
              </Link>
            </li>
            <li>
              <Link href="/employers/kyambogo-university/8660/">
                Kyambogo University
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section>
        <h3 className="container mx-auto text-center py-8 px-4 items-end">
          {' '}
          <Link className="border rounded-3xl  p-4" href="/employers/">
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
          If you're interested in a great experience while saving time & money…{' '}
          <Link className="btn btn-aj" href="https://postmyjob.online/">
            Post a Job Today
          </Link>
        </h3>
      </section>
    </main>
  );
}
