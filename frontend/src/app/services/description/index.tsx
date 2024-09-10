export default function Description() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col gap-10 md:flex-row items-center mb-8">
      <div className="flex flex-col gap-8 flex-1">
        <div className="text-primary text-xs font-semibold font-general-sans">
          services
        </div>
        <div className="text-5xl font-bold text-dark">
          Elevate Your Business with Our Comprehensive Services
        </div>
        <div className="flex items-center">
          At Fair Computers, we specialize in providing top-notch IT consulting
          services tailored to meet your unique business needs. Our team of
          experts is dedicated to delivering innovative solutions that drive
          growth, enhance efficiency, and ensure compliance and security.
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <img
          className="rounded-3xl"
          src="https://dummyimage.com/616x420/000/fff"
        />
      </div>
    </section>
  );
}
