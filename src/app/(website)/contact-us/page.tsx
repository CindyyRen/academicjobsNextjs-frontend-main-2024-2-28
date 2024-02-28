import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactUsForm from '@/components/forms/ContactUsForm';

export const metadata: Metadata = {
  title: 'Contact Us', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Contact our knowledgeable team today for assistance and information on our number 1 academic job board site in higher education and academia. ',
  keywords:
    'Contact Us Academicjobs, Contact Academic Jobs, Academicjobs Contact',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="prose">
          <h1 className="mt-8">Let’s Get Together!</h1>
          <h2 className="mt-4">
            Tell us what you need, and we will be straight back to you. At
            Academic Jobs we make it easy for you!
          </h2>
          <h4 className="mt-4 mb-0">
            <span className="font-bold">Fun Fact: </span> AcademicJobs.com is
            the go-to job board in higher education, experiencing rapid growth
            with a larger audience and more job opportunities than any other.
            Join the success story that even has our mothers beaming with pride!
          </h4>
        </div>

        <div className="container mt-16">
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-figure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="red"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Recruiters & Institutions Helped</div>
              <div className="stat-value text-blue-700">1.3K</div>
              <div className="stat-desc">
                Saved Recruiters & Institutions 8 minutes per post
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    stroke="pink"
                    opacity="1"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Academic Positions Filled</div>
              <div className="stat-value text-pink-500">8.6K</div>
              <div className="stat-desc">
                Provided Job Seekers with more opportunities than any other Job
                Board
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <Image
                      width={150}
                      height={150}
                      src="/about-us/ai-fast-job-posting.jpg"
                      alt="Fast Job Posting with Exclusive AI assistant"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-value">900%</div>
              <div className="stat-title">Faster Job Posting</div>
              <div className="stat-desc">
                With our Quick Job Post Technology
              </div>
            </div>
          </div>
        </div>

        <div className="container my-16 flex flex-col sm:flex-row gap-20 px-8 sm:px-32">
          <div className="card bg-slate-50 changed-css shadow-xl">
            <figure>
              <Image
                width={800}
                height={534}
                src="/ai-jop-posting/ai-job-listing-automation.jpg"
                alt="Let us help you find your next crazy SMART academic employee"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Let us help you find your next crazy SMART academic employee!
              </h2>
              <p>
                Post a job now and see how easy it is, we do all the heavy
                lifting for you.
              </p>
              <div className="card-actions justify-end">
                <Link href="/post-a-job" className="btn btn-accent">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-slate-50 changed-css shadow-xl">
            <figure>
              <Image
                width={800}
                height={534}
                src="/ai-resume-extraction/ai-resume-extraction.jpg"
                alt="Find your Dream Job Today"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Find your Dream Job Today!</h2>
              <p>
                Are you looking for your dream role? Then search all academic
                jobs now.
              </p>
              <div className="card-actions justify-end">
                <Link href="/jobs" className="btn btn-info">
                  Find Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8">
          <ContactUsForm maxWidth="700" />
          {/* Contact Numbers */}
          <div className="flex flex-col w-full bg-slate-100 py-4 px-8 rounded-2xl lg:min-w-[450px] lg:max-w-[500px] mt-8 lg:mt-0">
            <h2 className="underline-full mb-6">Global Office Numbers</h2>
            <ul className="contact-number mb-4">
              {/* <li>
                <a className="footer-nav__link" href="tel:+852-3730021">
                  <strong>Asia: </strong>+852-3730021 (Hong Kong)
                </a>
              </li> */}
              <li>
                <a className="footer-nav__link" href="tel:+61-452070156">
                  <strong>Australia: </strong> +61-452070156 (Melbourne)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+61-452070156">
                  <strong>New Zealand: </strong>+61-452070156 (Wellington)
                </a>
              </li>

              {/* <li>
                <a className="footer-nav__link" href="tel:778 819 1866">
                  <strong>Canada: </strong>778 819 1866 (Vancouver)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+415 819 0021">
                  <strong>United States: </strong>415 819 0021 (San Francisco)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+49-4158730021">
                  <strong>Europe: </strong>+49-4158730021 (Berlin)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+91-2250972736">
                  <strong>India: </strong>+91-2250972736 (Mumbai)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+44-2045876329">
                  <strong>United Kingdom: </strong>+44-2045876329 (London)
                </a>
              </li> */}
            </ul>
            <Image
              src="/contact-us/global-office-numbers.jpg"
              width={500}
              height={500}
              alt="Global Office Numbers"
              className="rounded-xl mx-auto mt-auto mb-4"
            />
          </div>
        </div>
      </main>
    </>
  );
}
