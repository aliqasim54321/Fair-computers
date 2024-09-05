import styles from "../home.module.css";

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
              className={`inline-block mb-2 text-5xl font-bold ${styles.highlight} after:right-10 after:bg-unorganic-green relative`}
            >
              240%
            </div>
            <div className="text-sm font-general-sans">Productivity Growth</div>
          </div>
          <div>
            <div
              className={`inline-block mb-2 text-5xl font-bold ${styles.highlight} after:right-10 after:bg-sky-blue relative`}
            >
              99%
            </div>
            <div className="text-sm font-general-sans">Output Efficacy</div>
          </div>
          <div>
            <div
              className={`inline-block mb-2 text-5xl font-bold ${styles.highlight} after:right-10 after:bg-shiny-pink relative`}
            >
              50+
            </div>
            <div className="text-sm font-general-sans">Happy Partners</div>
          </div>
          <div>
            <div
              className={`inline-block mb-2 text-5xl font-bold ${styles.highlight} after:right-10 after:bg-almost-orange relative`}
            >
              100%
            </div>
            <div className="text-sm font-general-sans">Client Retention</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          className="rounded-3xl"
          src="https://dummyimage.com/616x640/000/fff"
        />
      </div>
    </section>
  );
}
