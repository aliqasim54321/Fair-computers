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
  Input
} from "@nextui-org/react";
import Button from "@/components/Button";

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Careers",
  ];

  return (
    <>
      <Navbar className="dark bg-primary" height="80px">
        <NavbarContent className="sm:hidden !grow-0" justify="start">
          <NavbarMenuToggle className="text-white" />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="start">
          <NavbarBrand>
            <p className="font-extrabold text-4xl text-foreground">Fair Computers</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex sm:gap-6 md:gap-12" justify="end">
          <NavbarBrand>
            <p className="font-extrabold text-4xl text-foreground">Fair Computers</p>
          </NavbarBrand>
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                className="font-general-sans font-semibold text-sm"
                color="foreground"
                href="#"
              >
                {item}
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
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <main className="light flex min-h-screen flex-col items-center justify-between">
        {children}
      </main>

      <footer className="bg-dark flex w-full h-auto items-center justify-center py-20 text-white flex-col lg:flex-row gap-10">
        <div className="flex px-6 w-full flex-col lg:flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px] gap-16">
          <div className="flex gap-12 w-full items-center justify-between">
            <div className="flex flex-col gap-8 flex-1 lg:flex-initial lg:min-w-[500px]">
              <p className="font-extrabold text-4xl">Fair Computers</p>
              <p className="font-general-sans text-sm">Join our mailing list to stay up to date on offers and services.</p>
              <form className="inline-flex gap-4" name="subscribe" method="POST">
                <Input type="email" variant="underlined" placeholder="Enter your email" />
                <Button
                  className="font-semibold font-general-sans py-6 px-6"
                  type="button"
                  color="light"
                  radius="full"
                >
                  Subscribe
                </Button>
              </form>
              <p className="font-general-sans text-sm leading-6">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col self-start gap-4 flex-1">
              <div className="font-semibold	font-general-sans text-xs">Explore More</div>
              <div className="font-general-sans text-sm">About</div>
              <div className="font-general-sans text-sm">Services</div>
              <div className="font-general-sans text-sm">Contact US</div>
              <div className="font-general-sans text-sm">Careers</div>
              <div className="font-general-sans text-sm">FAQs</div>
            </div>
            <div className="flex flex-col self-start gap-4 flex-1">
              <div className="font-semibold	font-general-sans text-xs">Follow Us</div>
              <div className="font-general-sans text-sm">Facebook</div>
              <div className="font-general-sans text-sm">Instagram</div>
              <div className="font-general-sans text-sm">X</div>
              <div className="font-general-sans text-sm">LinkedIn</div>
              <div className="font-general-sans text-sm">Youtube</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}