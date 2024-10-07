"use client";

import React from "react";
import { RadioGroup, Radio, CheckboxGroup, Checkbox } from "@nextui-org/react";
import { FILTER, JOB_TYPE, WORK_MODE } from "../page";

export interface SearchbarProps {
  defaultFilter: FILTER;
  onChange: (form: {
    datePosted: string;
    jobType: JOB_TYPE[];
    workMode: WORK_MODE[];
  }) => void;
}

export default function Searchbar({ defaultFilter, onChange }: SearchbarProps) {
  const [datePosted, setDatePosted] = React.useState(defaultFilter.datePosted);
  const [jobType, setJobType] = React.useState<string[] | JOB_TYPE[]>(defaultFilter.jobType);
  const [workMode, setWorkMode] = React.useState<string[] | WORK_MODE[]>(defaultFilter.workMode);

  React.useEffect(() => {
    onChange({
      datePosted,
      jobType: jobType as JOB_TYPE[],
      workMode: workMode as WORK_MODE[],
    });
  }, [datePosted, jobType, workMode]); //eslint-disable-line

  return (
    <form className="w-[192px] hidden md:block">
      <RadioGroup
        label="Date Posted"
        onValueChange={setDatePosted}
        defaultValue={datePosted}
        classNames={{
          label: "text-2xl text-primary font-bold mb-3",
          wrapper: "text-[#2C2C2E] mb-6",
        }}
      >
        <Radio
          value="24"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 24 hours
        </Radio>
        <Radio
          value="72"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 3 days
        </Radio>
        <Radio
          value="168"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 7 days
        </Radio>
        <Radio
          value="336"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 14 days
        </Radio>
        <Radio
          value="0"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Anytime
        </Radio>
      </RadioGroup>
      <CheckboxGroup
        label="Job Type"
        onValueChange={setJobType}
        defaultValue={jobType}
        classNames={{
          label: "text-2xl text-primary font-bold mb-3",
          wrapper: "text-[#2C2C2E] mb-6",
        }}
      >
        {Object.entries(JOB_TYPE).map(([key, value]) => (
          <Checkbox
            key={key}
            value={value}
            radius="sm"
            classNames={{ label: "text-sm font-manrope p-2" }}
          >
            {value}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <CheckboxGroup
        label="Work mode"
        onValueChange={setWorkMode}
        defaultValue={workMode}
        classNames={{
          label: "text-2xl text-primary font-bold mb-3",
          wrapper: "text-[#2C2C2E] mb-6",
        }}
      >
        {Object.entries(WORK_MODE).map(([key, value]) => (
          <Checkbox
            key={key}
            value={value}
            radius="sm"
            classNames={{ label: "text-sm font-manrope p-2" }}
          >
            {value}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </form>
  );
}
