import Welcome from "./welcome";
import Partners from "./partners";
import Services from "./services";
import Story from "./story";
import Statistics from "./statistics";
import Testimonies from "./testimonies";
import Application from "./application";

export default function Home() {
  return (
    <>
      <Welcome />
      <Partners />
      <Services />
      <Story />
      <Statistics />
      <Testimonies />
      <Application />
    </>
  );
}
