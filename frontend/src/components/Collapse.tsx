import React from "react";
import Button from "./Button";

export default function Collapse({
  title = "ApplyNow",
  renderHeader,
  children,
  header,
  tags = [],
  isLiked,
}: {
  title?: string;
  renderHeader?: React.ReactNode;
  children: React.ReactNode;
  tags: string[];
  isLiked: boolean;
  header: {
    logo: string;
    name: string;
    company: string;
    city: string;
    salary: string;
    jobType: string;
  };
}) {
  const [open, setOpen] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col bg-white p-8 rounded-3xl">
      <div className="flex items-center justify-between">
        {renderHeader ? (
          renderHeader
        ) : (
          <>
            <img
              className="w-[80px] h-[80px] rounded-[32px] object-center	object-cover"
              src={header.logo}
              alt={header.name}
            />
            <div className="flex flex-col">
              <div className="text-primary font-bold text-2xl">
                {header.name}
              </div>
              <div className="text-base	font-bold	">{header.company}</div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-xl p-3 bg-gray">{header.city}</div>
              <div className="rounded-xl p-3 bg-gray">{header.salary}</div>
              <div className="rounded-xl p-3 bg-gray">{header.jobType}</div>
            </div>
          </>
        )}
        <Button
          variant={open ? "bordered" : "solid"}
          color={open ? "default" : "primary"}
          size="lg"
          style={{ width: 120 }}
          onClick={() => setOpen(!open)}
        >
          {open ? "Less Details" : title}
        </Button>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
        className={`transition-[max-height] duration-300 overflow-hidden`}
      >
        <div className="py-2">{children}</div>
        <div>
          <div className="border-b border-light-gray"></div>
          <div className="flex justify-between py-4">
            <div className="flex gap-4">
              {tags.map((i, idx) => (
                <div key={idx} className="rounded-xl p-3 bg-gray">
                  {i}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button color="gray" size="lg" isIconOnly>
                {isLiked ? (
                  <i className="fa-solid fa-heart" />
                ) : (
                  <i className="fa-regular fa-heart"></i>
                )}
              </Button>
              <Button color="gray" size="lg" isIconOnly>
                <i className="fa-solid fa-share-nodes" />
              </Button>
              <Button color="primary" size="lg" style={{ width: 120 }}>
                {title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
