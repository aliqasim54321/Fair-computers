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
    <div className="flex flex-col bg-white p-5 lg:p-6 rounded-xl lg:rounded-3xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        {renderHeader ? (
          renderHeader
        ) : (
          <div className="flex flex-col lg:items-center lg:flex-row gap-3">
            <img
              className="hidden lg:block w-[80px] h-[80px] rounded-[32px] object-center	object-cover"
              src={header.logo}
              alt={header.name}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  className="hidden sm:block w-[80px] h-[80px] lg:hidden rounded-[32px] object-center	object-cover"
                  src={header.logo}
                  alt={header.name}
                />
                <div className="flex flex-col">
                  <div className="text-primary font-bold text-lg lg:text-2xl">
                    {header.name}
                  </div>
                  <div className="text-sm lg:text-base font-bold">
                    {header.company}
                  </div>
                </div>
              </div>
              <Button
                radius="sm"
                className="lg:hidden w-[100px]"
                variant={open ? "bordered" : "solid"}
                color={open ? "default" : "primary"}
                size="md"
                onClick={() => setOpen(!open)}
              >
                {open ? "Less Details" : title}
              </Button>
            </div>
            <div className="flex lg:hidden xl:flex gap-4 flex-wrap">
              <div className="flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md">
                <i className="fa-solid fa-location-dot mr-2"></i>
                {header.city}
              </div>
              <div className="flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md">
                {header.salary}
              </div>
              <div className="flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md">
                {header.jobType}
              </div>
            </div>
          </div>
        )}
        <Button
          className="hidden lg:block"
          variant={open ? "bordered" : "solid"}
          color={open ? "default" : "primary"}
          size="lg"
          style={{ width: 130 }}
          onClick={() => setOpen(!open)}
        >
          {open ? "Less Details" : title}
        </Button>
      </div>
      <div className="hidden lg:flex gap-4 mt-4 xl:hidden flex-wrap">
        <div className="flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md">
          <i className="fa-solid fa-location-dot mr-2"></i>
          {header.city}
        </div>
        <div className="flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md">
          {header.salary}
        </div>
        <div className="flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md">
          {header.jobType}
        </div>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
        className={`transition-[max-height] duration-300 overflow-hidden`}
      >
        <div className="py-2">{children}</div>
        <div className="border-b border-light-gray"></div>
        <div className="flex flex-col md:flex-row justify-between pt-4 gap-4">
          <div className="hidden lg:flex gap-2 md:gap-4 flex-wrap">
            {tags.map((i, idx) => (
              <div
                key={idx}
                className="font-medium rounded-md text-sm md:text-md md:rounded-xl p-2 md:p-3 bg-gray"
              >
                {i}
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-between flex-1 lg:flex-none">
            <div className="flex gap-2">
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
            </div>
            <Button className="w-[130px]" color="primary" size="lg">
              {title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
