import React from "react";
import Image from "next/image";

import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center">
        <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
          <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
          <div className="relative rounded-[15px] bg-white p-6">
            <div className="space-y-4">
              <Image
                className="rounded-[16px] border-2 border-solid"
                src="/static/images/ux-fast-light.svg"
                width={341}
                height={164}
              />
              <p className="text-lg font-semibold text-slate-800">
                <FiArrowRight className="text-3xl" /> Next.js Boilerplate
              </p>
              <p className="font-md text-slate-500">
                This boilerplate contain Tailwind CSS, Module Paths, and React
                Icons.
              </p>
              <p className="font-md text-slate-700">By Bunleap Sorn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
