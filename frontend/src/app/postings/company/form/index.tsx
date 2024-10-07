"use client";

import React from "react";
import { Button, Input, Textarea, Modal } from "@/components";
import { useAsyncFn } from "@/hooks";

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const inputFile = React.useRef<HTMLInputElement | null>(null);

  const { mutate, isLoading } = useAsyncFn<any>(
    "/company-profile",
    "POST",
    undefined,
    {
      onSuccess: () => {
        setOpen(true);
      },
    },
  );

  const onFileButtonClick = () => {
    inputFile?.current?.click();
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate(Object.fromEntries(formData));
  };

  return (
    <section className="container max-w-[1280px] mx-auto">
      <Modal
        open={open}
        onChange={setOpen}
        okText="Close"
        closable={false}
        text="Your company profile has been submitted for review! Fair Computers will notify you via email once your profile is approved and you're ready to start posting jobs."
      />
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col m-auto max-w-[700px] flex-1 gap-6 border-1 border-dark p-10 rounded-lg"
      >
        <Input
          isRequired
          required
          name="companyName"
          variant="rectangle"
          label="Company Name"
        />
        <div className="flex gap-5">
          <Input
            isRequired
            required
            name="industry"
            variant="rectangle"
            label="Industry"
          />
          <Input
            isRequired
            required
            name="website"
            variant="rectangle"
            type="url"
            label="Company Website"
          />
        </div>
        <Textarea
          isRequired
          required
          name="about"
          variant="rectangle"
          label="About"
          placeholder="Write briefly about your company"
        />
        <Input
          isRequired
          required
          name="contactPerson"
          variant="rectangle"
          label="Contact Person"
        />
        <div className="flex gap-5">
          <Input
            isRequired
            required
            type="email"
            name="contactEmail"
            variant="rectangle"
            label="Contact Email"
          />
          <Input
            isRequired
            required
            name="contactPhoneNumber"
            variant="rectangle"
            label="Contact Phone Number"
          />
        </div>
        <div className="flex justify-between items-center px-4">
          <div className="text-powerful-gray font-open-sans">
            Upload Company Logo (Jpeg, Png)
          </div>
          <input
            name="companyLogo"
            ref={inputFile}
            className="hidden"
            type="file"
            accept="image/jpeg, image/jpg, image/png"
          />
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            className="font-medium border-1 font-open-sans"
            onClick={onFileButtonClick}
          >
            Upload Logo
          </Button>
        </div>
        <div className="text-powerful-gray font-open-sans px-4">
          Note: Once you&#39;ve created your company profile, Fair Computers
          will review and approve it to ensure quality and authenticity. You’ll
          receive an email confirmation at the provided email address when your
          profile is approved and ready for posting jobs.
        </div>
        <Button
          type="submit"
          color="primary"
          radius="full"
          className="font-semibold w-fit m-auto"
          isLoading={isLoading}
        >
          Submit Now
        </Button>
      </form>
    </section>
  );
}
