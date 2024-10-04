import Button from "@/components/Button";

export default function Story() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col items-center gap-5 mb-8">
      <div className="max-w-screen-md flex flex-col gap-5 items-center text-center itmes-center">
        <div className="text-center text-primary text-xs font-semibold font-general-sans">
          Our Story
        </div>
        <div className="text-5xl font-bold leading-[3.6rem]">
          Transforming Businesses Through Technological Excellence
        </div>
        <div className="text-sm	font-general-sans">
          What makes us stand out to our customer and the partners we have
          worked with before?. Proceed to watch the samll video that provide a
          glimpse into how we became the most trusted service in Canada
        </div>
        <Button
          color="light"
          variant="bordered"
          radius="full"
          className="font-semibold border border-black w-fit"
        >
          About us
        </Button>
      </div>
      <iframe
        className="rounded-3xl h-[380px] md:h-[560px] lg:h-[700px]"
        width="100%"
        src="https://www.youtube.com/embed/PeBgYwSjtCY?si=hj_MklKOUlUDTlRy"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}
