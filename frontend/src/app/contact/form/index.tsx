"use client";

import React from "react";
import { Button, Input, Textarea, Modal } from "@/components";
import { useAsyncFn } from "@/hooks";

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const { mutate, isLoading } = useAsyncFn<any>("/contact", "POST", undefined, {
    onSuccess: () => {
      setOpen(true);
    },
  });

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      mutate(Object.fromEntries(formData));
    },
    [] //eslint-disable-line
  );

  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col gap-10 md:flex-row items-center mb-8">
      <Modal
        open={open}
        onChange={setOpen}
        okText="Close"
        closable={false}
        text="We have received your message and will contact you within 24 hours."
      />
      <div className="flex flex-col gap-8 flex-1">
        <div className="text-primary text-xs font-semibold font-general-sans">
          Contact US
        </div>
        <div className="text-5xl font-bold text-dark">
          Get in touch to book your first appointment
        </div>
        <div className="flex items-center">
          <div className="bg-primary text-white rounded w-[50px] h-[50px] flex items-center justify-center mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              />
            </svg>
          </div>
          <div className="text-dark font-semibold">
            <div className="text-xs text-left">Phone</div>
            <a className="text-xl" href="tel:(123)456-7890" title="phone">
              (123) 456-7890
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-primary text-white rounded w-[50px] h-[50px] flex items-center justify-center mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              />
            </svg>
          </div>
          <div className="text-dark font-semibold justify-start">
            <div className="text-xs text-left">Mail</div>
            <a className="text-xl" href="mailto:hi@faircomp.ca" title="email">
              hi@faircomp.ca
            </a>
          </div>
        </div>
      </div>
      <form
        name="contact"
        className="flex flex-col flex-1 gap-10 border-1 border-dark p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-10">
          <Input name="firstName" variant="rectangle" label="First Name" />
          <Input name="lastName" variant="rectangle" label="Last Name" />
        </div>
        <div className="flex gap-10">
          <Input name="phone" variant="rectangle" label="Phone" />
          <Input name="email" variant="rectangle" type="text" label="Email" />
        </div>
        <Textarea
          name="message"
          variant="rectangle"
          label="Message"
          placeholder="Type your message here"
        />
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
