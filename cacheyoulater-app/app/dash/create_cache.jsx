import { Create_Cache, gold } from "@/assets";
import Image from "next/image";
import React from "react";

const create_cache = () => {
    return (
        <div className="bg-[#fffff1] w-screen h-screen">
            create_cache
            <Image
                src={Create_Cache}
                width={200}
                height={200}
                alt={"bruh this is jsut a test chill"}
                className="ml-8"
            />
            <div className="w-screen flex flex-row justify-center items-center">
                <Image
                    src={gold}
                    width={200}
                    height={200}
                    alt={"bruh this is jsut a test chill"}
                    className=""
                />
            </div>
        </div>
    );
};

export default create_cache;
