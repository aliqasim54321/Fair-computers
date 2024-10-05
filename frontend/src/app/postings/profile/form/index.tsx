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
        text="Your profile has been submitted for review! Fair Computers will review your details and send an approval confirmation to your email, so you can start applying for jobs."
      />
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col m-auto max-w-[700px] flex-1 gap-6 border-1 border-dark p-10 rounded-lg"
      >
        <div className="flex gap-5">
          <Input variant="rectangle" label="First Name" />
          <Input variant="rectangle" label="Last Name" />
        </div>
        <div className="flex gap-5">
          <Input variant="rectangle" label="Email Address" />
          <Input variant="rectangle" label="Phone Number" />
        </div>
        <Textarea
          variant="rectangle"
          label="About"
          placeholder="Write a short bio"
        />
        <Input variant="rectangle" type="url" label="LinkedIn Link" />
        <div className="flex justify-between items-center px-4">
          <div className="text-powerful-gray font-open-sans">
            Upload Your Resume (Pdf, Docx)
          </div>
          <input
            name="company"
            ref={inputFile}
            className="hidden"
            type="file"
            accept=".pdf, .docx"
          />
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            className="font-medium border-1 font-open-sans"
            onClick={onFileButtonClick}
          >
            Upload Resume
          </Button>
        </div>
        <div className="text-powerful-gray font-open-sans px-4">
          Note: After submitting your job seeker profile, Fair Computers will
          review it to maintain a high standard for all applicants. Keep an eye
          on your inbox for an email confirmation once your profile is approved
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
