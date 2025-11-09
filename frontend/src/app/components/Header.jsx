"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { MdLocalShipping } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const offers = [
    "20% off in this season",
    "Flat 100₹ off on orders above 1000₹",
    "Buy 1 Get 1 Free on select items",
  ];
  const [active, setActive] = useState(0);
  const preMsg = () => setActive(active === 0 ? offers.length - 1 : active - 1);
  const nextMsg = () =>
    setActive(active === offers.length - 1 ? 0 : active + 1);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Bed Linen", href: "/category/bed-linen" },
    { name: "Flooring", href: "/category/flooring" },
    { name: "Table Decor", href: "/category/table-decor" },
    { name: "Gifting", href: "/category/gifting" },
    { name: "Zero Waste", href: "/category/zerowaste" },
    { name: "SALE", href: "/category/sale" },
    { name: "Blog", href: "/category/blog" },
    { name: "Rewards", href: "/category/rewards" },
  ];

  useEffect(() => {
    const interval = setInterval(() => nextMsg(), 3000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between w-full bg-slate-800 text-white px-4 h-12 ">
        <div className="flex items-center gap-2 min-w-[200px] max-w-md mx-auto px-4">
          <button onClick={preMsg} className="text-2xl px-2">
            {"<"}
          </button>
          <p className="text-center py-2 m-0 flex-grow truncate">
            {offers[active]}
          </p>
          <button onClick={nextMsg} className="text-2xl px-2">
            {">"}
          </button>
        </div>
        <div className="flex items-center gap-4 min-w-[140px] justify-end">
          <a
            href="/track-order"
            className="flex items-center gap-1 text-blue-300 hover:underline text-sm whitespace-nowrap"
          >
            <MdLocalShipping />
            Track order
          </a>
          <a
            href="tel:1234567890"
            className="flex items-center gap-1 text-blue-300 hover:underline text-sm whitespace-nowrap"
          >
          <MdPhoneInTalk />
            +91-9999999999
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          HABOO
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-yellow-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <Search className="cursor-pointer" />
          <User className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 hover:text-yellow-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
