"use client";

import React from "react";
import Welcome from "./welcome";
import Partners from "./partners";
import Searchbar from "./searchbar";
import List, { JobProps } from "./list";
import { useAsyncFn } from "@/hooks";
import { FILTER, JOB_TYPE, WORK_MODE } from "@/constants";

export default function Careers() {
  const [filter, setFilter] = React.useState<FILTER>({
    datePosted: "0",
    jobType: [
      JOB_TYPE.FullTime,
      JOB_TYPE.Contract,
      JOB_TYPE.InternShip,
      JOB_TYPE.PartTime,
      JOB_TYPE.Temporary,
    ],
    workMode: [WORK_MODE.OnSite, WORK_MODE.Remote, WORK_MODE.Hybrid],
  });

  const { data, mutate, isLoading } = useAsyncFn<{ jobPostings: JobProps[] }>(
    "/careers",
    "GET",
  );

  const items = React.useMemo(() => {
    if (!data) return [];
    return data.jobPostings.filter(
      (i) =>
        filter.jobType?.length ? filter.jobType.includes(i.jobType) : true,
      // && (filter.workMode?.length ? filter.workMode.includes(i.workMode) : true),
    );
  }, [data, filter]);

  React.useEffect(() => {
    mutate();
  }, [mutate]); //eslint-disable-line

  return (
    <>
      <Welcome mutate={mutate} loading={isLoading} />
      <Partners />
      <section className="flex container max-w-[1280px] mx-auto px-6">
        <Searchbar onChange={setFilter} defaultFilter={filter} />
        <List items={items || []} />
      </section>
    </>
  );
}
