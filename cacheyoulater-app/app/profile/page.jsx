"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { back, emptiness } from "@/assets";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Your existing form submission logic
            const data = {
                username: username,
                password: password,
            };

            // Make a request to authenticate the user
            const response = await fetch("http://localhost:8080/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            // Handle the response as needed
            console.log(responseData);
        } catch (error) {
            // Handle any errors that occur during the request
            console.error(error);
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute left-14 mt-6 top-0">
                <Image
                    src={back}
                    width={50}
                    height={50}
                    alt={"create cache"}
                    onClick={() => buttonscaled(false)}
                />
            </div>
            <span className="text-4xl italic">Jasmine</span>
            <Image
                src={emptiness}
                width={350}
                height={350}
                alt={"guy mascot"}
                className="z-10"
            />
            <form
                className="w-3/5 flex flex-col justify-center items-center z-10"
                onSubmit={handleSubmit}
            >
                {/* Submit button */}
                <div className="mb-6 rounded-full outline-2 outline-black sm:w-1/3 w-2/3 border-2 border-black">
                    <button
                        type="submit"
                        className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-md h-8"
                    >
                        Past Caches
                    </button>
                </div>
                <div className="mb-6 rounded-full outline-2 outline-black sm:w-1/3 w-2/3 border-2 border-black">
                    <button
                        type="submit"
                        className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-md h-8"
                    >
                        Share Profile
                    </button>
                </div>
                <div className="mb-24 rounded-full outline-2 outline-black sm:w-1/3 w-2/3 border-2 border-black">
                    <button
                        type="submit"
                        className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-md h-8"
                    >
                        Settings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
