"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import "swiper/css";

const ITEMS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Careers",
    link: "/careers",
  },
];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar maxWidth="xl" className="dark bg-primary" height="80px">
        <NavbarContent className="sm:hidden !grow-0" justify="start">
          <NavbarMenuToggle
            className="text-white"
            icon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                />
              </svg>
            )}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="start">
          <NavbarBrand>
            <div className="font-extrabold text-4xl text-foreground">
              Fair Computers
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex sm:gap-6 md:gap-12"
          justify="end"
        >
          <NavbarBrand>
            <div className="font-extrabold text-4xl text-foreground">
              Fair Computers
            </div>
          </NavbarBrand>
          {ITEMS.map((i, idx) => (
            <NavbarItem key={idx}>
              <Link
                className={`font-general-sans font-semibold text-sm ${i.link === pathname ? "text-powerful-gray" : ""}`}
                title={i.name}
                color="foreground"
                href={i.link}
              >
                {i.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="!grow-0 lg:pl-8">
          <NavbarItem className="hidden lg:flex">
            <Button
              className="font-semibold font-general-sans py-6 px-6"
              type="button"
              color="light"
              radius="full"
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {ITEMS.map((i, idx) => (
            <NavbarMenuItem key={idx}>
              <Link
                title={i.name}
                className={`w-full ${i.link === pathname ? "text-primary" : ""}`}
                color="foreground"
                href={i.link}
                size="lg"
              >
                {i.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <main className="">{children}</main>

      <footer className="dark bg-dark text-white w-full py-20">
        <div className="container max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
            <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-10 lg:gap-16">
              <div className="flex flex-col gap-8 w-full lg:min-w-[500px]">
                <h2 className="text-4xl font-extrabold">Fair Computers</h2>
                <div className="text-sm font-general-sans">
                  Join our mailing list to stay up to date on offers and
                  services.
                </div>
                <form
                  className="inline-flex gap-4 items-center w-full"
                  name="subscribe"
                  method="POST"
                >
                  <Input
                    type="email"
                    variant="underlined"
                    placeholder="Enter your email"
                    className="flex-grow"
                  />
                  <Button
                    className="font-semibold font-general-sans py-3 px-6"
                    type="submit"
                    color="light"
                    radius="full"
                  >
                    Subscribe
                  </Button>
                </form>
                <div className="text-sm font-general-sans leading-6">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col flex-1 gap-4">
                  <h3 className="text-xs font-semibold font-general-sans">
                    Explore More
                  </h3>
                  <Link
                    href="#"
                    title="About"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    title="Services"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    title="Contact Us"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="#"
                    title="Careers"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    title="FAQs"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    FAQs
                  </Link>
                </div>
                <div className="flex flex-col flex-1 gap-4">
                  <h3 className="text-xs font-semibold font-general-sans">
                    Follow Us
                  </h3>
                  <Link
                    href="#"
                    title="Facebook"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    title="Instagram"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    title="X"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    X
                  </Link>
                  <Link
                    href="#"
                    title="LinkedIn"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="#"
                    title="YouTube"
                    className="text-sm font-general-sans hover:underline"
                    color="foreground"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
            <div className="text-sm font-general-sans text-white">
              © 2024 Fair Computers. All rights reserved.
            </div>
            <div className="flex gap-8">
              <Link
                href="#"
                title="Privacy Policy"
                className="text-sm font-general-sans underline hover:no-underline"
                color="foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                title="Terms of Service"
                className="text-sm font-general-sans underline hover:no-underline"
                color="foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                title="Cookies Settings"
                className="text-sm font-general-sans underline hover:no-underline"
                color="foreground"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
