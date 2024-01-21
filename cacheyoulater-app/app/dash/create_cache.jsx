import { Create_Cache, gold } from "@/assets";
import Image from "next/image";
import React from "react";

const create_cache = () => {
    return (
        <div className="bg-[#fffff1] w-screen h-screen z-10">
            <Image
                src={Create_Cache}
                width={200}
                height={200}
                alt={"create cache"}
                className="ml-8 pt-[15vh]"
            />
            <div className="flex flex-col w-screen h-[20vh] justify-center items-center my-12 hover:cursor-pointer">
                <div className="italics rounded-md w-[80vw] h-[20vh] bg-[#d9d9d9] outline-2 outline-dashed flex flex-row justify-center items-center">
                    Upload Image
                </div>
            </div>
            <span className="ml-[10vw]">Message:</span>
            <div className="w-screen flex flex-col justify-center items-center">
                <input
                    type="text"
                    className="rounded-md w-[80vw] h-[10vh] focus:outline-black
                  placeholder:text-black sm:pl-[14px] pl-[8px] text-white bg-[#e7e7e7] border-2 border-[#747474]"
                    placeholder="Username"
                />
            </div>
            <span className="ml-[10vw]">Message:</span>
            <div className="w-screen flex flex-col justify-center items-center">
                <input
                    type="text"
                    className="rounded-md w-[80vw] h-[5vh] focus:outline-black
                  placeholder:text-black sm:pl-[14px] pl-[8px] text-white bg-[#e7e7e7] border-2 border-[#747474]"
                    placeholder="Username"
                />
            </div>
            <div className="w-screen flex flex-row justify-center items-center bottom-0">
                <Image
                    src={gold}
                    width={1000}
                    height={1000}
                    alt={"gold"}
                    className=""
                />
            </div>
        </div>
    );
};

export default create_cache;
