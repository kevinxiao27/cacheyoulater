"use client"

import React, { useState } from "react"
import Image from "next/image"
import { road_trip, guy } from "@/assets"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handlePasswordAuth = async () => {
    try {
      // Password-based authentication
      const authData = await pb
        .collection("users")
        .authWithPassword(username, password)

      // Access auth data from the authStore
      console.log(pb.authStore.isValid)
      console.log(pb.authStore.token)
      console.log(pb.authStore.model.id)

      // Handle the authentication success as needed
      console.log(authData)
    } catch (error) {
      // Handle any errors that occur during authentication
      console.error(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Your existing form submission logic
      const data = {
        username: username,
        password: password,
      }

      // Make a request to authenticate the user
      const response = await pb.collection("users").create(data)

      // Handle the response as needed
      console.log(response)

      // Optionally, perform password-based authentication after the form submission
      await handlePasswordAuth()
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error)
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
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
      <form
        className="w-3/5 flex flex-col justify-center items-center z-10"
        onSubmit={handleSubmit}
      >
        {/* Your existing form fields */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md w-full h-10 focus:outline-black
                  placeholder:text-black sm:pl-[14px] pl-[8px] text-black bg-[#e7e7e7] border-2 border-[#747474]"
          placeholder="E-mail"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-md w-full h-10 focus:outline-black
                  placeholder:text-black sm:pl-[14px] pl-[8px] text-black bg-[#e7e7e7] border-2 border-[#747474]"
          placeholder="Username"
        />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md w-full h-10 focus:outline-black
                  placeholder:text-black sm:pl-[14px] pl-[8px] text-black bg-[#e7e7e7] border-2 border-[#747474]"
          placeholder="Password"
        />
        {/* Submit button */}
        <div className="mb-24 rounded-full outline-2 outline-black sm:w-1/3 w-1/2 border-2 border-black">
          <button
            type="submit"
            className="bg-[#F37021] rounded-full outline-2 outline-black w-full flex flex-row justify-center items-center text-xl"
          >
            Login
          </button>
        </div>
      </form>
      {/* Password-based authentication button */}
      <button
        onClick={handlePasswordAuth}
        className="bg-[#4285F4] rounded-full outline-2 outline-black w-1/5 flex flex-row justify-center items-center text-xl text-white mt-4"
      >
        Login with Password
      </button>
    </div>
  )
}

export default LoginPage
