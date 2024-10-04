import Button from "@/components/Button";

export default function Application() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col items-center gap-5 mb-8">
      <div className="flex flex-col gap-5 items-center text-center itmes-center">
        <div className="text-5xl lg:text-8xl font-bold">Get onboard Today!</div>
        <div className="text-sm	font-general-sans max-w-[639px] leading-6">
          Uncover the transformative power of Fair Computers as echoed by those
          who&#39;ve made it their professional haven. This is more than finding
          a project; it&#39;s discovering a community that fuels your journey to
          success.
        </div>
        <Button color="primary" radius="full" className="font-semibold w-fit">
          Become a part of the family
        </Button>
      </div>
    </section>
  );
}
