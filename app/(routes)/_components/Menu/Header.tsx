import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import Cart from "./Cart";
import AllCategories from "./AllCategories";
import MainMenu from "./MainMenu";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="h-6 lg:h-8 bg-blue-900 text-center flex justify-center items-center">
        <p className="text-white font-bold text-xs sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          suscipit.
        </p>
      </div>
      <div className="border-b hidden lg:flex lg:px-32 xl:px-64">
        <div className="container mx-auto">
          <div className=" flex flex-row justify-between items-center text-xs text-slate-500 p-3">
            <div className="flex flex-row gap-6">
              <Link href="/" className="hover:underline">
                About Us
              </Link>
              <Link href="/" className="hover:underline">
                My Account
              </Link>
              <Link href="/" className="hover:underline">
                Wishlist
              </Link>
            </div>
            <div className="hidden lg:block text-center">
              <p>100% Secure delivery wiyhout contacting</p>
            </div>
            <div className="flex flex-row gap-2">
              <span>Need Help?Call Us:</span>
              <span className="font-semibold">+90 555 555 55 55</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-4 mr-2 ml-2 lg:px-32 xl:px-64 justify-between mt-5">
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
        <div className="text-2xl font-bold">Logo</div>
        <div className="hidden lg:flex mx-4 relative">
          <Input
            className="bg-slate-100 lg:w-[450px] xl:w-[700px] text-sm py-6"
            placeholder="Search for  products...."
          />
          <Search className="absolute right-3 top-3" />
        </div>
        <div className="text-base flex flex-row items-center gap-3 lg:gap-6 font-semibold">
          <div className="border rounded-full p-2">
            <User />
          </div>
          <div className="hidden lg:flex">$0.00</div>
          <Cart />
        </div>
      </div>
      <div className="hidden lg:flex py-4 border-b flex-row lg:px-32 xl:px-64 mx-2 items-center justify-between">
        <AllCategories />
        <MainMenu />
      </div>
    </div>
  );
};

export default Header;