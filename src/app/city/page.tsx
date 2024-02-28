import { cityData } from '@/data/cityData';
import Link from 'next/link';
// import { BlogPostTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';
// import CityLogo from '@/components/CityLogo';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Helpful Advice on the Best Cities to study and work at as an academic', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: 'Helpful Career Advice, Blogs and Collaboration Tools', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Unlock your academic career potential with our expertly curated list of city data, insightful information about all the best cities to work and study at!',
  keywords:
    'academic career opportunities, best cities for education and work, expert guide to academic cities, top cities for students and professionals, study and work destinations guide, unlock academic potential, curated list of educational cities, global academic city rankings, career advancement in top academic cities, insightful academic city reviews, comprehensive guide to studying abroad, best places for academic growth, international education city guide, academic city comparison, where to study and work globally, exploring academic opportunities worldwide, choosing the right city for your studies, expert recommendations for academic cities, navigating your academic career globally, ultimate guide to global study locations',
};

export default function BlogPosts() {
  const cityPath = '/city/';
  const topList = 6;

  return (
    <main className="content-grid">
      <HeroBanner
        h1="Discover the World's Leading Cities for Academic Excellence and Innovation"
        h2="Expert Academic Guidance and Resources for Students, Researchers, and Academics"
        para1="Embark on a journey through the world's most renowned cities, where academic dreams are turned into reality, and the pathways to intellectual achievement are as diverse as they are enriching. In these hubs of knowledge and innovation, students, researchers, and professors alike find a treasure trove of resources, mentorship, and inspiration."
        // para2="From the historic universities of Europe to the cutting-edge research institutions in North America and Asia, each city offers unique opportunities to delve deeper into your field, collaborate with leading experts, and contribute to groundbreaking discoveries. Whether you're seeking to expand your academic horizons, pursue rigorous research, or find a community of like-minded scholars, our guide to the world's academic cities opens the door to endless possibilities for growth, learning, and professional development. Explore with us and discover the ultimate academic pathway that aligns with your aspirations and goals."
        src="/cities/cities-of-the-world-for-academics.jpg"
        alt="The World's Leading Cities for Academic Excellence and Innovation"
        btnPrimaryText="Find Jobs in Your City"
        btnPrimaryURL="/jobs"
        reorder={false}
      />
      {/* <CityLogo /> */}
      {/* <Image
        src={getCityLogo('Melbourne', 'Australia')}
        alt="People immersed in academic blogs at our vibrant Academic Hub"
        width={800}
        height={800}
      /> */}
      <h2 className="underline-full mb-8">Top Cities for Higher Ed Jobs</h2>
      {cityData ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {cityData.slice(0, topList).map((post, index) => (
              <article
                key={index}
                className="card card-side bg-slate-100 shadow-xl"
              >
                <figure>
                  <Link href={cityPath + post.slug}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image_url}
                      alt={post.alt}
                      className="max-w-[260px] h-full object-cover"
                    />
                  </Link>
                </figure>
                <div className="card-body max-w-96">
                  <h2 className="card-title grow line-clamp-3 m-0 mb-8">
                    <Link
                      href={cityPath + post.slug}
                      className="hover:text-orange-500 text-xl"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="h-[100px] relative line-clamp-3 m-0">
                    {post.description}
                    <div className="blog-gradient"> </div>
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={cityPath + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      More about {post.city}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 mt-10">
            <iframe
              className=" aspect-video  rounded-3xl"
              src="https://www.youtube.com/embed/bEEmo_KhOOk?si=yiNtzXaYyASiWU8W"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/hSbjVkmSIrc?si=qeq_VAZ3ZEQpWhjh"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/yn-ctFDfI60?si=REwYQIJFPBm6NnXm"
              title="YouTube video player"
            ></iframe>
          </div> */}

          {cityData.length > topList ? (
            <>
              <h2 className="underline-full mt-16 mb-8">
                Explore Cities in Academia
              </h2>{' '}
            </>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {cityData.slice(topList).map((post, index) => (
              <article
                key={index}
                className="card bg-slate-100 shadow-xl image-full items-stretch"
              >
                <figure className="h-[240px]">
                  <Link href={cityPath + post.slug}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image_url}
                      alt={post.alt}
                      className="h-full object-cover"
                    />
                  </Link>
                </figure>
                <div className="card-body p-6">
                  <h2 className="card-title line-clamp-3 leading-tight">
                    <Link
                      href={cityPath + post.slug}
                      className="text-white hover:text-orange-500 text-lg"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="card-actions justify-end mt-auto">
                    <Link
                      href={cityPath + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div>
          Something went wrong loading our City content. Please try reloading?
        </div>
      )}
    </main>
  );
}
