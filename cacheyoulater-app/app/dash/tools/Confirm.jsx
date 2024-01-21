"use client";

import React, { useEffect, useState } from "react";
import { Happy3, home } from "@/assets";
import Image from "next/image";

const Confirm = ({ setSelf, setNext, setPrev }) => {
    const canvasStyles = {
        position: "fixed",
        pointerEvents: "none",
        width: "100vh",
        height: "100vh",
        top: 0,
        left: 0,
    };

    const arow = () => {
        setSelf(false)
        setNext(true)
        setPrev(false)
    }

    // useEffect(() => {
    //     console.log("ra");
    //     //timeout
    //     const timeout = setTimeout(() => {
    //         setConductor(false), 3000
    //     });
    //     return () => clearTimeout(timeout);
    // }, [conductor]);

    return (
        <div
            className={`transition duration-500 ease-in-out absolute z-50 overscroll-none overflow-hidden pointer-events-auto`}
        >
            <div className="w-full h-16 pt-[8vh] z-50 -mt-[10vh] bg-white flex flex-row items-center justify-end pb-[5vh]">
                <div className="w-16 h-16 mr-12">
                    <Image
                        src={home}
                        alt={"create cache"}
                        style={{ objectFit: "contain" }}
                        className={`z-50  transition duration-1000 ease-in-out translate-y-12`}
                        onClick={() => setSelf(false)}
                    />
                </div>
            </div>
            <div className="bg-white w-screen h-screen z-10 overflow-hidden flex flex-col justify-center item-align">
                <div className="absolute right-5 -mt-12"></div>
                <div className="w-[100vw] -mt-[15vh]">
                    <Image
                        src={Happy3}
                        alt={"create cache"}
                        style={{ objectFit: "contain" }}
                        className="mx-auto pt-[15vh]"
                    />
                </div>
                <div className="mb-24 rounded-full outline-2 outline-black sm:w-1/3 w-2/3 border-2 border-black mx-auto">
                    <button
                        type="submit"
                        onClick={arow}
                        className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-xl"
                    >
                        Confirm your cache!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirm;
