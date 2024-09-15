import Button from "@/components/Button";
import styles from "./welcome.module.css";

export default function Welcome() {
  return (
    <section
      className={`${styles.welcome} bg-center bg-cover flex items-center justify-center`}
    >
      <div className="max-w-[768px] px-6 text-center flex flex-col gap-8 items-center justify-center">
        <div className="text-primary text-xs font-semibold font-general-sans">
          Job Board
        </div>
        <h1 className="text-5xl md:text-8xl font-bold	text-dark">
          Find Your Next Job With Us
        </h1>
        <p className="text-dark text-sm leading-6 font-general-sans">
          Discover your next career move with Fair computers, the most student
          friendly job board in Ontario. we have linked hundreds of students
          with coop programs in the industry.
        </p>
      </div>
    </section>
  );
}
