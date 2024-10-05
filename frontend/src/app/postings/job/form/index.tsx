"use client";

import React from "react";
import { Button, Input, Textarea, Modal } from "@/components";

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const inputFile = React.useRef<HTMLInputElement | null>(null);

  const onFileButtonClick = () => {
    inputFile?.current?.click();
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section className="container max-w-[1280px] mx-auto">
      <Modal
        open={open}
        onChange={setOpen}
        okText="Close"
        closable={false}
        text="Your job post has been submitted for review! Fair Computers will notify you via email once your job is approved and you're ready to start posting."
      />
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col m-auto max-w-[700px] flex-1 gap-6 border-1 border-dark p-10 rounded-lg"
      >
        <Input
          variant="rectangle"
          label="Job Title"
          placeholder="Enter a clear, concise job title (e.g., 'UX Designer', 'Marketing Manager')"
        />
        <div className="flex gap-5">
          <Input
            variant="rectangle"
            label="Job Type"
            placeholder="Full-time, Part-time, Internship"
          />
          <Input
            variant="rectangle"
            label="Location"
            placeholder="Enter the job location or Remote"
          />
        </div>
        <Textarea
          variant="rectangle"
          label="Job Description"
          placeholder="Describe the role, responsibilities, and what you’re looking for in a candidate."
        />
        <Input
          variant="rectangle"
          label="Required Qualifications"
          placeholder="List essential qualifications, skills, or certifications, separated by commas"
        />
        <div className="flex gap-5">
          <Input
            variant="rectangle"
            label="Salary Range"
            placeholder="$18 - $20 / hour"
          />
          <Input
            variant="rectangle"
            label="Job Link (Optional)"
            placeholder="Job link on LinkedIn etc"
          />
        </div>
        <div className="flex justify-between items-center px-4">
          <div className="text-powerful-gray font-open-sans">
            Upload Job Description (PDF) (optional)
          </div>
          <input
            name="company"
            ref={inputFile}
            className="hidden"
            type="file"
            accept=".pdf"
          />
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            className="font-medium border-1 font-open-sans"
            onClick={onFileButtonClick}
          >
            Upload
          </Button>
        </div>
        <div className="text-powerful-gray font-open-sans px-4">
          Note: Once you&#39;ve created your company profile, Fair Computers
          will review and approve it to ensure quality and authenticity. You’ll
          receive an email confirmation at the provided email address when your
          profile is approved and ready for posting jobs
        </div>
        <Button
          type="submit"
          color="primary"
          radius="full"
          className="font-semibold w-fit m-auto"
        >
          Submit Now
        </Button>
      </form>
    </section>
  );
}
