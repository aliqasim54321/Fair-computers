import styles from "../home.module.css";

const ITEMS = [
  {
    cover: "https://dummyimage.com/574x300/000/fff",
    name: "Mobile Application Development",
    text: "Transform your ideas into intuitive and engaging mobile apps that captivate your audience. Our expert team specializes in designing and developing custom mobile applications for iOS and Android platforms. From concept to deployment, we ensure your app meets the highest standards of functionality, performance, and user experience.",
  },
  {
    cover: "https://dummyimage.com/574x300/000/fff",
    name: "Web Development",
    text: "Create dynamic and responsive websites that make a lasting impression and drive user engagement. Our web development services encompass front-end and back-end development, ensuring your website is visually stunning, fast, and user-friendly. We leverage the latest technologies and frameworks to deliver exceptional web experiences.",
  },
  {
    cover: "https://dummyimage.com/574x300/000/fff",
    name: "Custom Software",
    text: "Build bespoke software solutions that streamline your operations and empower your business. Whether you need a custom CRM, inventory management system, or enterprise application, our team has the expertise to design, develop, and deploy tailored solutions that meet your specific requirements and objectives.",
  },
  {
    cover: "https://dummyimage.com/574x300/000/fff",
    name: "System Governance",
    text: "Implement robust governance frameworks to ensure the integrity and reliability of your systems. We offer comprehensive system governance services, including policy development, risk assessment, and compliance monitoring. Our goal is to help you maintain a secure and efficient IT environment.",
  },
  {
    cover: "https://dummyimage.com/574x300/000/fff",
    name: "Compliance and Security Audit",
    text: "Conduct thorough audits to identify and mitigate risks, ensuring compliance with industry standards. Our compliance and security audit services cover a wide range of areas, including data protection, network security, and regulatory compliance. We provide actionable insights and recommendations to enhance your security posture.",
  },
  {
    cover: "https://dummyimage.com/574x300/000/fff",
    name: "ERP Implementations/Upgrades",
    text: "Seamlessly integrate ERP systems to optimize your business processes and maximize efficiency. Our ERP implementation and upgrade services include system analysis, configuration, customization, and training. Whether you're implementing a new ERP system or upgrading an existing one, we ensure a smooth and successful transition.",
  },
];

export default function Services() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col items-center mb-8">
      <div className="text-primary font-bold text-5xl	mb-14">Our Services</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-dark">
        {ITEMS.map((i, idx) => (
          <div
            key={idx}
            className="bg-gray p-6 rounded-3xl flex flex-col gap-4 text-black"
          >
            <img alt={i.name} className="rounded-xl" src={i.cover} />
            <div className="font-bold	text-2xl text-center">{i.name}</div>
            <div className="text-sm">{i.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
