import Button from "@/components/Button";
import styles from "./welcome.module.css";

export default function Welcome() {
  return (
    <section
      className={`${styles.welcome} bg-center bg-cover flex items-center justify-center`}
    >
      <div className="max-w-[914px] px-6 text-center flex flex-col gap-8 items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold	text-gray">
          &quot;Revolutionizing Business Solutions with Innovation&quot;
        </h1>
        <p className="text-white text-sm leading-6 font-general-sans">
          At Fair Computers, our experts are your best allies. We&apos;re here
          to listen to your needs and help you determine how to simplify your IT
          environment and take it in the right direction.
        </p>
        <Button radius="full" className="font-semibold w-fit">
          Tell us about your needs
        </Button>
      </div>
    </section>
  );
}
