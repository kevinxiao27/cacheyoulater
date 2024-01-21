import { Create_Cache, back, gold } from "@/assets";
import Image from "next/image";
import React from "react";

const create_cache = () => {
    return (
        <div className="bg-white w-screen h-screen z-10 overflow-hidden">
            <div className="absolute right-5 -mt-12">
                <Image
                    src={back}
                    width={50}
                    height={50}
                    alt={"create cache"}
                    className="ml-8 pt-[15vh]"
                />
            </div>
            <Image
                src={Create_Cache}
                width={200}
                height={200}
                alt={"create cache"}
                className="ml-8 pt-[15vh]"
            />
            <div className="flex flex-col w-screen h-[15vh] justify-center items-center mt-4 hover:cursor-pointer">
                <div className="italics rounded-md w-[80vw] h-[20vh] bg-[#d9d9d9] bg-opacity-30 outline-2 outline-dashed flex flex-row justify-center items-center">
                    Upload Image
                </div>
            </div>
            <span className="ml-[10vw] mt-8">Message:</span>
            <input
                type="text"
                className="rounded-md w-[80vw] ml-[10vw] h-[10vh] focus:outline-black
                  placeholder:text-black text-white bg-[#d9d9d9] bg-opacity-30 border-2 border-[#747474]"
                placeholder="Username"
            />
            <span className="ml-[10vw]">Hint:</span>
            <span className="italic text-sm text-gray-500"> (optional)</span>
            <input
                type="text"
                className="rounded-md w-[80vw] ml-[10vw] h-8 focus:outline-black
                  placeholder:text-black text-white bg-[#d9d9d9] bg-opacity-30 border-2 border-[#747474]"
                placeholder="Username"
            />
            <div className="w-screen flex flex-row justify-center items-center z-10 mt-8">
                <div className="rounded-full outline-2 outline-black sm:w-1/3 w-2/3 border-2 border-black">
                    <button
                        type="submit"
                        className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-xl z-20"
                    >
                        Create Cache
                    </button>
                </div>
            </div>
            <div className="w-screen flex flex-row justify-center items-center -z-10">
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
