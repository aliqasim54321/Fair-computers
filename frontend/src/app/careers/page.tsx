import Welcome from "./welcome";
import Partners from "./partners";
import Searchbar from "./searchbar";
import List from "./list";

export default function Careers() {
  return (
    <>
      <Welcome />
      <Partners />
      <section className="flex container max-w-[1280px] mx-auto p-6">
        <Searchbar />
        <List />
      </section>
    </>
  );
}
