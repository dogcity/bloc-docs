"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "@/components/Navigator/ThemeToggler";
import menuData from "@/components/Navigator/menuData";
import Divider from "@/components/Divider";
import LogoFullLight from '@/assets/images/logo-full-light.svg'
import LogoFullDark from '@/assets/images/logo-full-dark.svg'
import LogoShortLight from '@/assets/images/logo-short-light.svg'
import LogoShortDark from '@/assets/images/logo-short-dark.svg'

const Navigator = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <div
        className={`header left-0 top-0 z-40 flex w-screen items-center border-b border-gray-900 dark:border-gray-100 ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container w-screen">
          <div className="relative w-screen flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-2 lg:py-4"
                } `}
              >
                <Image
                  src={LogoFullLight}
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden lg:block w-full dark:hidden"
                />
                <Image
                  src={LogoFullDark}
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full lg:dark:block"
                />
                <Image
                  src={LogoShortLight}
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full lg:hidden dark:hidden"
                />
                <Image
                  src={LogoShortDark}
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block lg:dark:hidden"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-gray-900 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <Link
                          href={menuItem.path || '#'}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:p-4 ${
                            usePathName === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Divider className="lg:hidden" />
                  <Link
                    href="/signin"
                    className="lg:hidden flex py-2 text-base lg:mr-0 lg:p-4 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  >
                    Entrar
                  </Link>
                </nav>
              </div>
              <Divider direction="vertical" className="hidden lg:block" />
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <ThemeToggler />
                <Link
                  href="/signin"
                  className="hidden ml-1 py-2 px-4 text-base text-dark border border-gray-900 dark:border-gray-100 rounded-xl hover:opacity-70 dark:text-white lg:block"
                >
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigator;