import React, { useState } from "react";
import Image from "next/image";
import { logo, create_button, Create_Cache, back, gold } from "@/assets";
import Uploader from "./Uploader";

const CreateCache = ({ buttonscaled, made, made2,  snd }) => {
    const funct = () => {
        if (!snd) {
            made(true);
            buttonscaled(true)
        } else {
            made(false);
            made2(true);
            buttonscaled(false)
        }
    }
    return (
        <div
            className={`transition duration-500 ease-in-out absolute z-50 overscroll-none overflow-hidden pointer-events-auto`}
        >
            <div className="bg-white w-screen h-screen z-10 overflow-hidden">
                <div className="absolute right-5 -mt-12">
                    <Image
                        src={back}
                        width={50}
                        height={50}
                        alt={"create cache"}
                        className="ml-8 pt-[15vh]"
                        onClick={() => buttonscaled(false)}
                    />
                </div>
                <Image
                    src={Create_Cache}
                    width={200}
                    height={200}
                    alt={"create cache"}
                    className="ml-8 pt-[15vh]"
                />
                {/* <div className="flex flex-col w-screen h-[15vh] justify-center items-center mt-4 hover:cursor-pointer">
                    <div className="italics rounded-md w-[80vw] h-[20vh] bg-[#d9d9d9] bg-opacity-30 outline-2 outline-dashed flex flex-row justify-center items-center">
                        Upload Image
                    </div>
                </div> */}
                <Uploader subbed={made}/>
                <span className="ml-[10vw] mt-8">Message:</span>
                <input
                    type="text"
                    className="rounded-md w-full mx-[10vw] h-[10vh] focus:outline-black
                  placeholder:text-black text-white bg-[#d9d9d9] bg-opacity-30 border-2 border-[#747474]"
                    placeholder="Username"
                />
                <span className="ml-[10vw]">Hint:</span>
                <span className="italic text-sm text-gray-500">
                    {" "}
                    (optional)
                </span>
                <input
                    type="text"
                    className="rounded-md w-[80vw] ml-[10vw] h-8 focus:outline-black
                  placeholder:text-black text-white bg-[#d9d9d9] bg-opacity-30 border-2 border-[#747474]"
                    placeholder="Username"
                />
                <div className="w-screen flex flex-row justify-center items-center z-50 mt-8">
                    <div className="rounded-full outline-2 outline-black sm:w-1/3 w-2/3 border-2 border-black">
                        <button
                            type="submit"
                            onClick={()=>{funct()}}
                            className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-xl z-20"
                        >
                            Create Cache
                        </button>
                    </div>
                </div>
                <div className="w-screen flex flex-row justify-center items-center z-10 hover:cursor-pointer">
                    <Image
                        src={gold}
                        width={1000}
                        height={1000}
                        alt={"gold"}
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateCache;
