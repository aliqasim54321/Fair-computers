import styles from "./statistics.module.css";

export default function Statistics() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col gap-10 md:flex-row items-center mb-8">
      <div className="flex flex-col gap-8">
        <div className="text-primary text-xs font-semibold font-general-sans">
          Statistics
        </div>
        <div className="text-5xl font-bold text-dark">
          Our dedication & Passion speaks for itself
        </div>
        <div className="grid grid-cols-2 gap-10 text-dark">
          <div>
            <div
              className={`${styles.highlight} inline-block mb-2 text-5xl font-bold after:right-10 after:bg-unorganic-green relative`}
            >
              <div className="inherit z-[1]">240%</div>
            </div>
            <div className="text-sm font-general-sans">Productivity Growth</div>
          </div>
          <div>
            <div
              className={`${styles.highlight} inline-block mb-2 text-5xl font-bold after:right-10 after:bg-sky-blue relative`}
            >
              <div className="inherit z-[1]">99%</div>
            </div>
            <div className="text-sm font-general-sans">Output Efficacy</div>
          </div>
          <div>
            <div
              className={`${styles.highlight} inline-block mb-2 text-5xl font-bold after:right-10 after:bg-shiny-pink relative`}
            >
              <div className="inherit z-[1]">50+</div>
            </div>
            <div className="text-sm font-general-sans">Happy Partners</div>
          </div>
          <div>
            <div
              className={`${styles.highlight} inline-block mb-2 text-5xl font-bold after:right-10 after:bg-almost-orange relative`}
            >
              <div className="inherit z-[1]">100%</div>
            </div>
            <div className="text-sm font-general-sans">Client Retention</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          alt=""
          className="rounded-3xl"
          src="https://dummyimage.com/616x640/000/fff"
        />
      </div>
    </section>
  );
}
