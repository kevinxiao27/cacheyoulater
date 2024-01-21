'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { Happy } from "@/assets";

const Congratulations = ({conductor}) => {

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
            <div className="bg-white w-screen h-screen z-10 overflow-hidden flex flex-col justify-center item-align">
                <div className="absolute right-5 -mt-12"></div>
                <div className="w-[80vw] -mt-[15vh]">
                    <Image
                        src={Happy}
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

export default Congratulations;
