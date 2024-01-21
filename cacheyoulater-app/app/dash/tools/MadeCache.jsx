"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { Happy2, home } from "@/assets";

const MadeCache = ({ conductor, setSelf }) => {
    const canvasStyles = {
        position: "fixed",
        pointerEvents: "none",
        width: "100vh",
        height: "100vh",
        top: 0,
        left: 0,
    };

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
            <div className="w-full h-16 pt-[8vh] z-50 -mt-[10vh] bg-white flex flex-row items-center justify-end">
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
                <div className="w-[80vw] -mt-[15vh]">
                    <Image
                        src={Happy2}
                        alt={"create cache"}
                        style={{ objectFit: "contain" }}
                        className="ml-8 pt-[15vh]"
                    />
                    {conductor && (
                        <Fireworks
                            autorun={{ speed: 1 }}
                            style={canvasStyles}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MadeCache;
