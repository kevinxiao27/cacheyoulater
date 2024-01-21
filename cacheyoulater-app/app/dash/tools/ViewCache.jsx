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

const ViewCache = ({ buttonscaled }) => {
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
                <div className="flex flex-row justify-left items-center pt-[18vh]">
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
                        <Image
                            src={sample}
                            alt={"create cache"}
                            style={{objectFit:"contain"}}
                        />
                    </div>
                </div>
                <span className="ml-[10vw] mt-8">Hint: Near where we met when we were nine!</span>

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
                <div className="w-screen flex flex-row justify-center items-center z-10 hover:cursor-pointer mt-12">
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
