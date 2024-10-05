"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

const ITEMS = [
  {
    title: "How do I get started with your services?",
    text: "The time taken to develop a mobile application depends on various factors, including the complexity of the app, desired features, and the development approach. Typically, a simple app can be developed in a few weeks, while more complex apps may take several months.",
  },
  {
    title: "What technologies do you use for web development?",
    text: "The time taken to develop a mobile application depends on various factors, including the complexity of the app, desired features, and the development approach. Typically, a simple app can be developed in a few weeks, while more complex apps may take several months.",
  },
  {
    title:
      "Can you customize software solutions to fit our unique business needs?",
    text: "The time taken to develop a mobile application depends on various factors, including the complexity of the app, desired features, and the development approach. Typically, a simple app can be developed in a few weeks, while more complex apps may take several months.",
  },
  {
    title: "How often should system governance frameworks be reviewed?",
    text: "The time taken to develop a mobile application depends on various factors, including the complexity of the app, desired features, and the development approach. Typically, a simple app can be developed in a few weeks, while more complex apps may take several months.",
  },
  {
    title: "What is involved in a compliance and security audit?",
    text: "The time taken to develop a mobile application depends on various factors, including the complexity of the app, desired features, and the development approach. Typically, a simple app can be developed in a few weeks, while more complex apps may take several months.",
  },
  {
    title: "How can ERP systems help optimize business processes?",
    text: "The time taken to develop a mobile application depends on various factors, including the complexity of the app, desired features, and the development approach. Typically, a simple app can be developed in a few weeks, while more complex apps may take several months.",
  },
  {
    title: "Still has questions?",
    text: "The time taken to develop a mobile application depends on various factors, including the complexity of the app, desired features, and the development approach. Typically, a simple app can be developed in a few weeks, while more complex apps may take several months.",
  },
];

export default function Questions() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col gap-10 md:flex-row items-center">
      <div className="flex flex-col gap-8 flex-1">
        <div className="text-primary text-xs font-semibold font-general-sans">
          Frequently Asked Questions
        </div>
        <div className="text-5xl font-bold text-dark">
          Get all your doubts cleared..
        </div>
        <div className="flex items-center">
          Frequently asked questions ordered by popularity. Here we provide
          simple and straightforward answers to common questions about our
          services.
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <Accordion
          isCompact
          dividerProps={{ className: "w-[136px] border-dark" }}
        >
          {ITEMS.map((i, idx) => (
            <AccordionItem
              key={idx}
              aria-label={i.title}
              title={i.title}
              classNames={{
                heading: "font-semibold	text-sm",
                content: "text-sm",
                indicator:
                  "rounded-full border-1 border-dark text-dark p-1 rotate-[270deg] data-[open=true]:-rotate-[-90deg]",
              }}
            >
              {i.text}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
