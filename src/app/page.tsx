"use client";
import Image from "next/image";
import Header from "@/components/header";

import Spline from "@splinetool/react-spline";
import Section from "@/components/subsection";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-[70vw] text-[40px] leading-none text-gray-600 px-8 pt-[50px]">
        explore our saas platform for the best
      </div>
      <div className="w-[80vw] text-[80px] leading-none text-black px-8">
        ai services. <br />
      </div>
      <div className="h-[40vh] flex justify-start items-start">
        <Spline scene="https://prod.spline.design/i8eNphGELT2tDQVT/scene.splinecode" />
      </div>
      <Section />
    </div>
  );
}
