'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SearchResults1 from '@/components/SearchResults1';
import { useSearchParams } from 'next/navigation';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import JobSearchBox2 from '@/components/JobSearchBox2';
import { filterType } from '@/utils/data';
import Link from 'next/link';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import Head from 'next/head';
export default function Page() {
  const searchParams = useSearchParams();
  //const allSearchParams = Object.fromEntries(searchParams1);
  //console.log("searchParams2qqqqq==================", Object.fromEntries(useSearchParams().entries()))
  //const query = Object.fromEntries(useSearchParams().entries());
  const q = decodeURIComponent(searchParams.get('q') || '');
  const l = decodeURIComponent(searchParams.get('l') || '');
  // const {
  //   data: filters,
  //   isLoading: filtersIsLoading,
  //   isSuccess: filtersIsSuccess,
  // } = useGetFiltersQuery(
  //   { category, filter1, q, l, mode: "normal" },
  //   { skip: !category }
  //   );
  const [filterTypes, setfilterTypes] = useState(filterType);
  const [category, setCategory] = useState('');
  const [filter1, setfilter] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log('===============================', filter1);
    // if (filter1.some(obj => obj.filter.includes("Executive "))) {
    //   setfilterTypes(p => ({ ...p, ExecutiveJobs: true }))
    // } else {
    //   setfilterTypes(p => ({ ...p, ExecutiveJobs: false }))
    // }
    // if (filter1.some(obj => obj.filter.includes("Human Resources"))) {
    //   setfilterTypes(p => ({ ...p, HRJobs: true }))
    // } else {
    //   setfilterTypes(p => ({ ...p, HRJobs: false }))
    // }
    setfilterTypes((p) => ({ ...p, ExecutiveJobs: false }));
    setfilterTypes((p) => ({ ...p, HRJobs: false }));
    setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes((p) => ({ ...p, FacultyDepartmentJobs: false }));
    switch (true) {
      case filter1.some((obj) => obj.filter.includes('Executive ')):
        setfilterTypes((p) => ({ ...p, ExecutiveJobs: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('Human Resources')):
        setfilterTypes((p) => ({ ...p, HRJobs: true }));
        break;
      case filter1.some((obj) =>
        obj.filter.includes('Support /Administration')
      ):
        setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('Academic / Faculty')):
        setfilterTypes((p) => ({ ...p, FacultyDepartmentJobs: true }));
        break;
      default:
        break;
    }
  }, [filter1]);
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: filters,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['filter', { category, filter1, q, l }],
    queryFn: async () => {
      //{ ...filter1, category,mode: "normal" }
      const response = await BaseApi.post('/filters', {
        category,
        filter1,
        q,
        l,
        mode: 'normal',
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: category !== '',
  });
  const filterValues9 = {
    Country: 'Country',
    State: 'State',
    City: 'City',
    JobType: 'Job Type',
    ExecutiveJobs: 'Executive Jobs',
    AdministrationSupportJobs: 'Administration Support Jobs',
    HRJobs: 'HR Jobs',
    FacultyDepartmentJobs: 'Faculty/Department',
    AcademicPositionType: 'Academic Position Type',
    EmploymentType: 'Employment Type',
    InstitutionName: 'Institution Name',
    SalaryRange: 'Salary Range in USD',
    OnsiteRemote: 'Onsite/Remote',
  };
  //const region = useSelector((state) => state.posts.region);
  //const [query, setQuery] = useState(Object.fromEntries(useSearchParams().entries()));
  const [isShowFilter, setIsShowFilter] = useState(false);
  //const filter1 = useSelector((state) => state.posts.filter1);
  //alert(location?.state?.filter1)
  ///console.log('router.query', searchParams);
  return (
    <main>
      {/* TODO: Add this to the page…
    
          Page Content
          Title: "Explore Academic Opportunities Worldwide"

          Introduction:
          "Discover your next academic adventure with our comprehensive job board tailored for educators, researchers, and administrative professionals. Whether you're seeking faculty positions, post-doctoral fellowships, or administrative roles, our platform connects you with diverse opportunities in universities and research institutions across the globe."

          How It Works:
          "1. Search Efficiently: Use our advanced search filters to narrow down your options by location, discipline, and job type.

          Stay Informed: Create alerts to get notified about the latest opportunities in your field.
          Apply with Ease: Directly submit your application through our platform and track your application status."
          Why Choose Us?:
          "From prestigious universities in the United States and the United Kingdom to emerging research centers in Asia and Europe, we curate the finest academic positions to propel your career forward. Our resources and guides support you at every step of your job search, ensuring you're well-prepared to seize your next opportunity."

          Metadata
          Title Tag: "Academic Jobs Board - Find Faculty, Research, and Admin Positions"

          Meta Description: "Connect with leading academic institutions worldwide on our job board. Discover faculty, research, and administrative positions tailored to your career aspirations. Start your academic job search today."

          Keywords: "academic jobs, faculty positions, research jobs, university careers, higher education employment, academic job search, post-doctoral positions, academic administration"

          FIXME: Additional SEO Tips
          Use Heading Tags: Structure your content using H1 for your main title, followed by H2s and H3s for subheadings to improve readability and SEO.
          Internal Linking: Include links to relevant sections of your site, such as specific job categories, application advice, or user testimonials.
          Call to Action (CTA): Encourage users to register for job alerts or submit their CVs to your database with clear, action-oriented CTAs.
          Responsive Design: Ensure your content is accessible and user-friendly across all devices, enhancing the user experience and SEO.
          Loading Speed: Optimize images and streamline your site's code to ensure fast loading times, crucial for SEO and user retention.
    
     */}
      <div className="w-full bg-gray-100 py-4 mb-4 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto ">
            <JobSearchBox forceClass="hidden md:block" />
            <JobSearchBox2 forceClass="block md:hidden" />
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-5xl  flex flex-col hidden md:block ">
        {
          // 顶层已选X  top
          filter1.length > 0 && (
            <div className="md:flex md:gap-4 md:flex-wrap pb-2">
              {filter1.map(({ category, filter }, i) => (
                <button
                  key={i}
                  className="btn  btn-xs bg-blue-900 text-white "
                  onClick={() => {
                    const updatedFilter = filter1.filter(
                      (_, index) => index !== i
                    );
                    setPage(0);
                    setfilter(updatedFilter);
                    //dispatch(setfilter(updatedFilter));
                  }}
                >
                  {`${filter} X`}
                </button>
              ))}
            </div>
          )
        }
        <div className="flex gap-4 flex-wrap">
          {Object.entries(filterTypes).map(
            (
              [filterType, showYN],
              i // 中层大目录m
            ) => (
              <button
                key={i}
                className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${
                  category === filterType
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white border-gray-500'
                }
                  ${showYN ? 'block' : 'hidden'}
                  `}
                onClick={() => {
                  if (category === filterType) {
                    setIsShowFilter((prev) => !prev);
                  } else {
                    setIsShowFilter(true);
                  }
                  console.log(filterType);
                  setCategory(filterType);
                }}
              >
                {filterValues9[filterType]}
              </button>
            )
          )}
        </div>
        {isShowFilter && (
          <div className="grid md:grid-cols-4 gap-1 grid-cols-2 pl-6 py-2">
            {filters?.length > 0 && // 低层小目录b
              filters.map(({ filter, job_count }, i) => (
                <button
                  key={i}
                  className="text-left text-gray-500 text-sm truncate"
                  onClick={() => {
                    setPage(0);
                    setfilter([...filter1, { category, filter }]);
                    //dispatch(setfilter([...filter1, { category, filter }]));
                    setIsShowFilter(false);
                  }}
                >{`${filter ? filter : 'Others'}  (${job_count})`}</button>
              ))}
            {/* {filters?.length == 23 && (
              <button
                className="btn btn-primary btn-xs"
                onClick={() => {
                  // navigate(`/advanced-search/${category}`);
                  navigate(`/advanced-search/${category}`, {
                    state: { filter1 },
                  });
                }}
              >
                Show All
              </button>
            )} */}
          </div>
        )}
      </div>
      <section class="jobs_grid job_post_search_container">
        <div class="filters_panel">
          <div class="filters_content">
            <JobFilter />
          </div>
        </div>
        <div class="listings_panel">
          <div class="listings_content">
            <SearchResults1 q={{ q: q, l: l || '', filter1 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
