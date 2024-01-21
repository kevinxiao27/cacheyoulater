"use client";

import React, { useEffect, useState, useInterval } from "react";
import Image from "next/image";
import { botle, home } from "@/assets";

const Prize = ({ timer, setSelf }) => {
    return (
        <div
            className={`transition duration-500 ease-in-out absolute z-50 overscroll-none overflow-hidden pointer-events-auto bg-white`}
        >
            <div className="w-full h-16 mt-[20vh] mb-[15vh] flex flex-row items-center justify-end">
                <div className="w-16 h-16 mr-12">
                    <Image
                        src={home}
                        alt={"create cache"}
                        style={{ objectFit: "contain" }}
                        className={`z-50  transition duration-1000 ease-in-out`}
                        onClick={()=>setSelf(false)}
                    />
                </div>
            </div>
            <div className="bg-white w-screen z-50 overflow-visible flex flex-col justify-center item-align">
                <span className="w-[80vw] mx-auto ">
                    I can’t believe we are 21 already. It feels as if it was
                    yesterday when we walked into the kindergarten classroom,
                    and the teacher made us sit together. I guess I have one
                    thing to thank Mrs. Palmer for: giving me the best friends
                    ever. I know work is stressing you all out lately but I hope
                    this was a little way to relax!
                </span>

                <span className="w-[80vw] mx-auto mt-12 mb-12 italic">
                    Love, glow worms, and cinnamon, Hana{" "}
                </span>
                <div>
                    <Image
                        src={botle}
                        alt={"create cache"}
                        style={{ objectFit: "contain" }}
                        className="z-50"
                    />
                </div>
            </div>
        </div>
    );
};

export default Prize;
