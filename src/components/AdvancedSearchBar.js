'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import { filterType } from "@/utils/data";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';

export default function AdvancedSearchBar() {
  const searchParams = useSearchParams();
  const q = decodeURIComponent(searchParams.get('q') || '');
  const l = decodeURIComponent(searchParams.get('l') || '');

  const [filterTypes, setfilterTypes] = useState(filterType);
  const [category, setCategory] = useState("");
  const [filter1, setfilter] = useState([]);
  const [page, setPage] = useState(0);
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
      const response = await BaseApi.post('/filters', { category, filter1, q, l, mode: "normal" },);
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: category !== "",
  });
  const filterValues9 = {
    Country: "Country",
    State: "State",
    City: "City",
    "Job Type(i.e. Faculty, Human Resources)": "Job Type",
    "Faculty/Department(i.e. Science, Business)": "Faculty/Department",
    "Academic Position Type(i.e. Lecturer, Fellow)": "Academic Position Type",
    "Executive Jobs(i.e. Directors, Registrars)": "Executive Jobs",
    "Employment Type(i.e. Full-time, casual)": "Employment Type",
    "Institution Name": "Institution Name",
    "Salary Range in USD": "Salary Range in USD",
    "Onsite/Remote": "Onsite/Remote",
  };

  const [isShowFilter, setIsShowFilter] = useState(false);

  return (
    <section>
      <div className=" flex flex-col hidden md:block ">
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
          {filterTypes?.length > 0 && // 中层大目录m
            filterTypes.map((filterType, i) => (
              <button
                key={i}
                className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-gray-500"
                  }`}
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
            ))}
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
                >{`${filter ? filter : "Others"
                  }  (${job_count})`}</button>
              ))}
            {filters?.length == 23 && (
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
            )}
          </div>
        )}
      </div>
    </section>
  );
}
