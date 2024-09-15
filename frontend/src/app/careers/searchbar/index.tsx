"use client";

import { RadioGroup, Radio, CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function Searchbar() {
  return (
    <form className="w-[192px]">
      <RadioGroup
        label="Date Posted"
        defaultValue="1"
        classNames={{
          label: "text-2xl text-primary font-bold mb-3",
          wrapper: "text-[#2C2C2E] mb-6",
        }}
      >
        <Radio
          value="2"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 24 hours
        </Radio>
        <Radio
          value="3"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 3 days
        </Radio>
        <Radio
          value="4"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 7 days
        </Radio>
        <Radio
          value="5"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Last 14 days
        </Radio>
        <Radio
          value="1"
          classNames={{ label: "text-sm font-manrope", labelWrapper: "p-2" }}
        >
          Anytime
        </Radio>
      </RadioGroup>
      <CheckboxGroup
        label="Job Type"
        defaultValue={["1"]}
        classNames={{
          label: "text-2xl text-primary font-bold mb-3",
          wrapper: "text-[#2C2C2E] mb-6",
        }}
      >
        <Checkbox
          value="1"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          Full-time
        </Checkbox>
        <Checkbox
          value="2"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          Contract
        </Checkbox>
        <Checkbox
          value="3"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          Internship
        </Checkbox>
        <Checkbox
          value="4"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          Part-time
        </Checkbox>
        <Checkbox
          value="5"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          temporary
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup
        label="Work mode"
        defaultValue={["1"]}
        classNames={{
          label: "text-2xl text-primary font-bold mb-3",
          wrapper: "text-[#2C2C2E] mb-6",
        }}
      >
        <Checkbox
          value="1"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          On-site
        </Checkbox>
        <Checkbox
          value="2"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          Remote
        </Checkbox>
        <Checkbox
          value="3"
          radius="sm"
          classNames={{ label: "text-sm font-manrope p-2" }}
        >
          Hybrid
        </Checkbox>
      </CheckboxGroup>
    </form>
  );
}
