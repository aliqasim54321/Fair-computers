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
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Link,
  Accordion,
  AccordionItem,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tabs,
  Tab,
  UserProps,
  ModalHeader,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Button, Input } from "@/components";
import { setSessionStorageItem, useAsyncFn } from "@/hooks";
import { useApp } from "@/providers/AppProvider";
import "swiper/css";

const ITEMS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Postings",
    link: "/postings",
    children: [
      {
        name: "Company",
        link: "/postings/company",
        description:
          "Create or update your company profile to start posting job.",
      },
      {
        name: "Job",
        link: "/postings/job",
        description: "Fill out the details below to create a job posting.",
      },
      // {
      //   name: "Profile",
      //   link: "/contact/profile",
      //   description:
      //     "Create or update your personal profile, upload your resume, and start applying to job postings.",
      // },
    ],
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const UserModal = useDisclosure();

  const ProfileModal = useDisclosure();

  const { setUser, user, logout } = useApp();

  const { mutate: signIn } = useAsyncFn<UserProps>(
    "/auth/signin",
    "POST",
    undefined,
    {
      onSuccess: (result) => {
        const profile = {
          token: result.token,
          name: result.user.name,
          email: result.user.email,
        };
        setUser(profile);
        setSessionStorageItem("user", profile);
        UserModal.onClose();
      },
    },
  );

  const { mutate: signUp } = useAsyncFn("/auth/signup", "POST", undefined, {
    onSuccess: (result) => {
      const profile = {
        token: result.token,
        name: result.user.name,
        email: result.user.email,
      };
      setUser(profile);
      setSessionStorageItem("user", profile);
      UserModal.onClose();
    },
  });

  const handleSignin = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      signIn(Object.fromEntries(formData));
    },
    [] //eslint-disable-line
  );

  const handleSignup = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      signUp(Object.fromEntries(formData));
    },
    [] //eslint-disable-line
  );

  const handleUpdateProfile = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // const formData = new FormData(e.target as HTMLFormElement);
      // signUp(Object.fromEntries(formData));
    },
    [] //eslint-disable-line
  );

  return (
    <>
      {ProfileModal.isOpen && (
        <Modal
          isOpen={ProfileModal.isOpen}
          onOpenChange={ProfileModal.onOpenChange}
          placement="center"
          classNames={{
            closeButton: "z-50",
          }}
          size="lg"
        >
          <ModalContent>
            <form name="profile" onSubmit={handleUpdateProfile}>
              <ModalHeader>Profile</ModalHeader>
              <ModalBody>
                <Input
                  required
                  isRequired
                  variant="default"
                  name="name"
                  label="Name"
                  defaultValue={user?.name}
                />
                <Input
                  disabled
                  isDisabled
                  variant="default"
                  name="email"
                  label="Email"
                  defaultValue={user?.email}
                />
                <Input
                  required
                  isRequired
                  variant="default"
                  name="password"
                  type="password"
                  label="Password"
                />
                <Input
                  required
                  isRequired
                  variant="default"
                  type="password"
                  label="Confirm Password"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="border-1 font-general-sans"
                  color="primary"
                  variant="bordered"
                  onPress={ProfileModal.onClose}
                >
                  Close
                </Button>
                <Button
                  className="font-general-sans"
                  color="primary"
                  type="submit"
                >
                  Update
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      )}

      {UserModal.isOpen && (
        <Modal
          isOpen={UserModal.isOpen}
          onOpenChange={UserModal.onOpenChange}
          placement="center"
          classNames={{
            closeButton: "z-50",
          }}
          size="lg"
        >
          <ModalContent>
            {(onClose) => (
              <Tabs
                aria-label="Tabs"
                variant="underlined"
                classNames={{
                  tabList:
                    "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-primary",
                  tab: "max-w-fit py-7 px-8 text-sm font-medium	font-open-sans !outline-0",
                  tabContent: "group-data-[selected=true]:text-primary",
                }}
              >
                <Tab key="signin" title="Sign In">
                  <form name="signin" onSubmit={handleSignin}>
                    <ModalBody>
                      <Input
                        required
                        isRequired
                        variant="default"
                        name="email"
                        label="Email"
                      />
                      <Input
                        required
                        isRequired
                        variant="default"
                        type="password"
                        name="password"
                        label="Password"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="border-1 font-general-sans"
                        color="primary"
                        variant="bordered"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="font-general-sans"
                        color="primary"
                        type="submit"
                      >
                        Sign In
                      </Button>
                    </ModalFooter>
                  </form>
                </Tab>
                <Tab key="signup" title="Sign Up">
                  <form name="signup" onSubmit={handleSignup}>
                    <ModalBody>
                      <Input
                        required
                        isRequired
                        variant="default"
                        name="name"
                        label="Name"
                      />
                      <Input
                        required
                        isRequired
                        variant="default"
                        name="email"
                        label="Email"
                      />
                      <Input
                        required
                        isRequired
                        variant="default"
                        name="password"
                        type="password"
                        label="Password"
                      />
                      <Input
                        required
                        isRequired
                        variant="default"
                        type="password"
                        label="Confirm Password"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="border-1 font-general-sans"
                        color="primary"
                        variant="bordered"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <Button
                        className="font-general-sans"
                        color="primary"
                        type="submit"
                      >
                        Sign Up
                      </Button>
                    </ModalFooter>
                  </form>
                </Tab>
              </Tabs>
            )}
          </ModalContent>
        </Modal>
      )}

      <Navbar maxWidth="xl" className="dark bg-primary" height="80px">
        <NavbarContent className="md:hidden !grow-0" justify="start">
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

        <NavbarContent className="pr-3" justify="start">
          <NavbarBrand>
            <div className="font-extrabold text-2xl lg:text-4xl text-foreground">
              Fair Computers
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-6 lg:gap-12" justify="end">
          {ITEMS.map((i, idx) =>
            i?.children && i.children.length ? (
              <Dropdown key={idx}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className={`p-0 bg-transparent data-[hover=true]:bg-transparent font-general-sans font-semibold text-sm ${i.children.map((i) => i.link).indexOf(pathname) > -1 ? "text-powerful-gray" : ""}`}
                    >
                      {i.name}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label={i.name}
                  className="w-[340px]"
                  hideSelectedIcon
                  itemClasses={{
                    base: "gap-4",
                    title: "font-general-sans font-semibold text-sm",
                  }}
                  selectedKeys={i.children
                    .map((x, xid) => (x.link === pathname ? xid : ""))
                    .toString()}
                  selectionMode="single"
                >
                  {i.children.map((c, cdx) => (
                    <DropdownItem
                      href={c.link}
                      key={cdx}
                      description={c.description}
                    >
                      {c.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
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
            ),
          )}
        </NavbarContent>

        <NavbarContent justify="end" className="!grow-0 lg:pl-8">
          <NavbarItem>
            {user ? (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button
                    type="button"
                    color="light"
                    radius="full"
                    variant="bordered"
                  >
                    {user.name}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" onPress={ProfileModal.onOpen}>
                    Profile
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" onPress={logout}>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                className="font-semibold border font-general-sans p-6"
                type="button"
                color="light"
                radius="full"
                variant="bordered"
                onPress={UserModal.onOpen}
              >
                SIGN IN/UP
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {ITEMS.map((i, idx) =>
            i?.children && i.children.length ? (
              <Accordion
                key={idx}
                variant="splitted"
                className="p-0"
                defaultExpandedKeys={
                  i.children.map((i) => i.link).indexOf(pathname) > -1
                    ? "0"
                    : ""
                }
              >
                <AccordionItem
                  key={0}
                  aria-label={i.name}
                  title={i.name}
                  classNames={{
                    base: "p-0 rounded-none shadow-none bg-transparent",
                    trigger: "p-0",
                    titleWrapper: "flex-none",
                    indicator:
                      "rotate-[270deg] data-[open=true]:-rotate-[-90deg]",
                  }}
                >
                  {i.children.map((c, cdx) => (
                    <Link
                      key={cdx}
                      className={`w-full text-large no-underline hover:opacity-80 ml-3 ${cdx === i.children.length - 1 ? "" : "mb-2"} ${c.link === pathname ? "text-primary" : ""}`}
                      title={c.name}
                      color="foreground"
                      href={c.link}
                    >
                      {c.name}
                    </Link>
                  ))}
                </AccordionItem>
              </Accordion>
            ) : (
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
            ),
          )}
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
