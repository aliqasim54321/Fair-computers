import { Image } from "@nextui-org/image";

const ITEMS = [
  {
    avatar:
      "https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Liam Brown",
    job: "Software Engineer, TechStartup Innovations",
    text: "“The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We love the coworking space!”",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Michael Thompson",
    job: "Graphic Designer, DesignCo",
    text: "“As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work.”",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Rodriguez",
    job: "Creative Director, DesignCraft Studio",
    text: "“The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.”",
  },
];

export default function Testimonies() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col items-center gap-5 mb-8">
      <div className="text-center text-primary text-xs font-semibold font-general-sans mb-6">
        Testimonies
      </div>
      <div className="text-5xl font-bold text-center">Our clients love us</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((i, idx) => (
          <div
            key={idx}
            className="text-center flex flex-col text-dark bg-white p-8 rounded-3xl font-general-sans"
          >
            <Image
              classNames={{
                wrapper: "w-14 h-14 rounded-full mx-auto mb-6 overflow-hidden",
                img: "w-full h-full object-cover",
              }}
              alt={i.name}
              src={i.avatar}
            />
            <div className="mb-6 text-sm">{i.text}</div>
            <div className="text-xs font-semibold mb-1">{i.name}</div>
            <div className="text-sm">{i.job}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
