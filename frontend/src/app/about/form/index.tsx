import Button from "@/components/Button";

export default function Form() {
  return (
    <section className="container max-w-[1280px] mx-auto p-6 flex flex-col gap-10 md:flex-row items-center mb-8">
      <div className="flex flex-col gap-8 flex-1">
        <div className="text-primary text-xs font-semibold font-general-sans">
          Contact US
        </div>
        <div className="text-5xl font-bold text-dark">
          Get in touch to book your first appointment
        </div>
        <div className="flex items-center">
          <div className="bg-primary text-white rounded w-[50px] h-[50px] flex items-center justify-center mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              />
            </svg>
          </div>
          <div className="text-dark font-semibold">
            <div className="text-xs text-left">Phone</div>
            <a className="text-xl" href="tel:(123)456-7890" title="phone">
              (123) 456-7890
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-primary text-white rounded w-[50px] h-[50px] flex items-center justify-center mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              />
            </svg>
          </div>
          <div className="text-dark font-semibold justify-start">
            <div className="text-xs text-left">Mail</div>
            <a className="text-xl" href="mailto:hi@faircomp.ca" title="email">
              hi@faircomp.ca
            </a>
          </div>
        </div>
      </div>
      <form className="flex flex-col flex-1 gap-10 border-1 border-dark p-10 rounded-lg">
        <div className="flex gap-10">
          <input
            className="w-full border-1 border-powerful-gray px-6 py-3"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="w-full border-1 border-powerful-gray px-6 py-3"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div className="flex gap-10">
          <input
            className="w-full border-1 border-powerful-gray px-6 py-3"
            type="text"
            name="phone"
            placeholder="Phone Number"
          />
          <input
            className="w-full border-1 border-powerful-gray px-6 py-3"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <textarea
          className="w-full border-1 border-powerful-gray px-6 py-3"
          name="message"
          placeholder="Type your message here"
        />
        <Button
          color="primary"
          radius="full"
          className="font-semibold w-fit m-auto"
        >
          Submit Now
        </Button>
      </form>
    </section>
  );
}
