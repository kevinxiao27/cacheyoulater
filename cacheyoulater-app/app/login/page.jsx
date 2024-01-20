import React from "react";
import Image from "next/image";
import { road_trip, guy } from "@/assets";

const page = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="absolute z-10">
                <Image
                    src={road_trip}
                    width={1044}
                    height={828}
                    alt={"road_trip background"}
                />
            </div>
            <Image
                src={guy}
                width={250}
                height={250}
                alt={"guy mascot"}
                className="mr-10 z-10"
            />
            <form className="w-3/5 flex flex-col justify-center items-center z-10">
                <input
                    type="text"
                    className="rounded-md w-full h-10 focus:outline-black
                  placeholder:text-black sm:pl-[14px] pl-[8px] text-white bg-[#e7e7e7] border-2 border-[#747474]"
                    placeholder="Username"
                />
                <input
                    type="text"
                    className="rounded-md w-full h-10 focus:outline-black
                  placeholder:text-black sm:pl-[14px] pl-[8px] text-white bg-[#e7e7e7] border-2 border-[#747474]"
                    placeholder="Password"
                />
                <div className="mb-10 rounded-full outline-2 outline-black sm:w-1/3 w-1/2 border-2 border-black">
                    <button
                        type="submit"
                        className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-xl"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default page;
