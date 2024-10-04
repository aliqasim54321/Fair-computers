"use client";

import Collapse from "@/components/Collapse";

const ITEMS = [
  {
    logo: "https://dummyimage.com/100x100/000/fff&text=logo",
    name: "Senior Software Engineer",
    salary: "12$ - 18$ per hour",
    jobType: "Part-Time",
    tags: ["Frontend Developer"],
    isLiked: true,
    company: {
      name: "Company name",
      city: "Mississauga",
    },
    content: (
      <div>
        <p>About the role:</p>
        <p>
          As a UX/UI designer you will dedicate your time to find nice and
          friendly ways to fulfil the wants and needs of our users.
        </p>
        <p>Responsibilities:</p>
        <ol>
          <li>Work with stakeholders to identify requirements</li>
          <li>Research customers, competitors, and products</li>
          <li>Develop personas, scenarios, and user stories</li>
          <li>Create wireframes, prototypes, and high-fidelity mock-ups</li>
          <li>Work with developers to ensure product quality</li>
          <li>Work closely with product owners to maximize customer success</li>
        </ol>
        <p>Our ideal candidate:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
        </p>
      </div>
    ),
  },
  {
    logo: "https://dummyimage.com/100x100/ccc/fff&text=logo",
    name: "Senior Interaction Designer",
    salary: "12$ - 18$ per hour",
    jobType: "Part-Time",
    tags: ["User Interface Design", "Experience design", "Contract Based work"],
    isLiked: false,
    company: {
      name: "Company name",
      city: "Mississauga",
    },
    content: (
      <div>
        <p>About the role:</p>
        <p>
          As a UX/UI designer you will dedicate your time to find nice and
          friendly ways to fulfil the wants and needs of our users.
        </p>
        <p>Responsibilities:</p>
        <ol>
          <li>Work with stakeholders to identify requirements</li>
          <li>Research customers, competitors, and products</li>
          <li>Develop personas, scenarios, and user stories</li>
          <li>Create wireframes, prototypes, and high-fidelity mock-ups</li>
          <li>Work with developers to ensure product quality</li>
          <li>Work closely with product owners to maximize customer success</li>
        </ol>
        <p>Our ideal candidate:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
        </p>
      </div>
    ),
  },
];

export default function List() {
  return (
    <div className="flex flex-col flex-1 gap-6">
      {ITEMS.map((i, idx) => (
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
          {i.content}
        </Collapse>
      ))}
    </div>
  );
}
