import React from "react";
import Image from "next/image";
import {
    logo,
    create_button,
    Create_Cache,
    back,
    gold,
    map,
    profile,
    sample,
} from "@/assets";

const ViewCache = ({ buttonscaled, jsoninfo }) => {
    return (
        <div
            className={`transition duration-500 ease-in-out absolute z-50 overscroll-none overflow-hidden pointer-events-auto`}
        >
            <div className="bg-white w-screen z-10 overflow-hidden ">
                <div className="absolute right-14 mt-6">
                    <Image
                        src={back}
                        width={50}
                        height={50}
                        alt={"create cache"}
                        className="ml-8 pt-[15vh]"
                        onClick={() => buttonscaled(false)}
                    />
                </div>
                <div className="flex flex-row justify-left items-center pt-[18vh] ">
                    <Image
                        src={profile}
                        width={50}
                        height={50}
                        alt={"create cache"}
                        className="ml-8"
                    />
                    <div>Hana</div>
                </div>
                <div className="flex flex-col w-screen justify-center items-center mt-4 hover:cursor-pointer">
                    <div className="w-[80vw] h-[80vw] overflow-hidden">
                        <span className="font-bold italic">
                            {jsoninfo.title}
                        </span>
                        <Image
                            src={sample}
                            alt={"create cache"}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-align">
                    <span className="my-2 w-[80vw] mx-auto text-wrap">
                        <span className="font-bold">Description: </span>
                        {jsoninfo.description}
                    </span>
                    <span className="ml-[10vw]">
                        <span className="font-bold">Hint: </span>Near where we met when we were nine!
                    </span>
                </div>

                <div className="w-screen flex flex-row justify-center items-center z-50 mt-8">
                    <div className="rounded-full outline-2 outline-black sm:w-1/3 w-2/3 border-2 border-black">
                        <button
                            type="submit"
                            className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-xl z-20"
                        >
                            Upload Image
                        </button>
                    </div>
                </div>
                <div className="w-screen flex flex-row justify-center items-center z-10 hover:cursor-pointer -mt-4">
                    <Image
                        src={map}
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

export default ViewCache;
