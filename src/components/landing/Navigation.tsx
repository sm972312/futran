import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home", active: currentPath === "/" },
    { path: "/about", label: "About", active: currentPath === "/about" },
    {
      path: "/technologies",
      label: "Technologies",
      active: currentPath === "/technologies",
    },
    {
      path: "/credentials",
      label: "Credentials",
      active: currentPath === "/credentials",
    },
    {
      path: "/contacts",
      label: "Contacts",
      active: currentPath === "/contacts",
    },
    {
      path: "/media-kit",
      label: "Media Kit",
      active: currentPath === "/media-kit",
    },
    {
      path: "/blog",
      label: "Blog",
      active: currentPath === "/blog",
    },
  ];

  return (
    <header
      className={`fixed z-50 flex w-full items-end text-lg text-[#ffffff] font-medium tracking-[-0.54px] justify-between pt-[30px] md:pt-[50px] px-4 md:px-[20px] lg:px-[120px] right-0 top-0 pointer-events-auto transition-all duration-300 ${
        scrolled ? "bg-black backdrop-blur-[98px] !pt-4 !pb-8" : ""
      }`}
    >
      <Link to="/" className="flex-shrink-0">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/lovable-uploads/logo_futran.svg"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/lovable-uploads/logo_futran.svg"
          />
          <img
            src="/lovable-uploads/logo_futran.svg"
            alt="FUTRAN Logo"
            className="w-[100px] md:w-32 md:h-auto object-contain"
          />
        </picture>
      </Link>
      <div className="block md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu size={24} color="#ffffff" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] bg-trasparent ">
            <SheetTitle className="text-lg font-semibold mb-4 hidden">
              Navigation Menu
            </SheetTitle>
            <nav className="flex flex-col justify-center space-y-6 pt-10">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`${
                    item.active ? "!text-[#03C04A] font-normal" : ""
                  } flex gap-2 items-center justify-end text-[24px] text-[#FFFFFF] font-normal`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="hidden md:flex gap-[20px] lg:gap-[40px] items-end justify-between">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`self-stretch gap-2.5 whitespace-nowrap my-auto flex items-center text-sm lg:text-base ${
              item.active ? "font-extrabold border-b-2" : "font-thin"
            } transition-colors`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
