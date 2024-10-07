"use client";

import Collapse from "@/components/Collapse";
import { JOB_TYPE, WORK_MODE } from "../page";

export interface JobProps {
  company: {
    city: string;
    name: string;
  };
  workMode: WORK_MODE[];
  content: string;
  isLiked: boolean;
  jobType: JOB_TYPE;
  logo: string;
  name: string;
  salary: string;
  tags: string[];
}

export interface ListProps {
  items: JobProps[];
}

export default function List({ items }: ListProps) {
  return (
    <div className="flex flex-col flex-1 gap-6">
      {items.map((i, idx) => (
        <Collapse
          key={idx}
          header={{
            logo: i.logo,
            name: i.name,
            company: i.company.name,
            city: i.company.city,
            salary: i.salary,
            jobType: i.jobType,
          }}
          tags={i.tags}
          isLiked={i.isLiked}
        >
          <div dangerouslySetInnerHTML={{ __html: i.content }} />
        </Collapse>
      ))}
    </div>
  );
}
