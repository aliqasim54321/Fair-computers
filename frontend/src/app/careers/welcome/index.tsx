"use client";

import Button from "@/components/Button";
import { Select, SelectItem, Input } from "@nextui-org/react";

import styles from "./welcome.module.css";

export default function Welcome() {
  return (
    <section
      className={`${styles.welcome} bg-center relative bg-cover flex flex-col items-center justify-center`}
    >
      <div className="max-w-[768px] px-6 text-center flex flex-col gap-8 items-center justify-center">
        <div className="text-primary text-xs font-semibold font-general-sans">
          Job Board
        </div>
        <h1 className="text-5xl md:text-8xl font-bold	text-dark">
          Find Your Next Job With Us
        </h1>
        <p className="text-dark text-sm leading-6 font-general-sans">
          Discover your next career move with Fair computers, the most student
          friendly job board in Ontario. we have linked hundreds of students
          with coop programs in the industry.
        </p>
      </div>
      <form
        name="form"
        method="POST"
        action=""
        className="hidden lg:flex items-center rounded-xl drop-shadow-md container gap-5 max-w-[1280px] h-[150px] mx-auto p-6 absolute bg-red-50 bottom-[-75px]"
      >
        <div className="bg-light-gray rounded-lg p-2 flex-1 flex items-center gap-3">
          <Input
            label=""
            variant="underlined"
            type="email"
            placeholder="Search for jobs.."
            classNames={{
              inputWrapper: "!border-transparent shadow-none",
              innerWrapper: "pb-0",
            }}
          />
          <Button color="primary" className="px-7 h-[47px]">
            <i className="fa-solid fa-magnifying-glass"></i>
            Show results
          </Button>
        </div>
        <Select
          label="Location"
          size="lg"
          classNames={{
            base: "w-[250px]",
            trigger: "rounded-lg",
          }}
        >
          <SelectItem key="0">Mississauga</SelectItem>
        </Select>
        <Select
          label="Job Type"
          size="lg"
          classNames={{
            base: "w-[250px]",
            trigger: "rounded-lg",
          }}
        >
          <SelectItem key="0">Full-Time</SelectItem>
        </Select>
      </form>
    </section>
  );
}
