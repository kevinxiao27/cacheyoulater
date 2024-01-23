import mongoose from "mongoose"
import Cache from "../models/Cache.js"
import User from "../models/User.js"

export const addCache = async (req, res, next) => {
  const userId = req.params.id
  const { title, file, description, date, gps, hint } = req.body

  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() === "" ||
    !date ||
    date.trim() === "" ||
    !file ||
    !gps ||
    gps.trim() === ""
  ) {
    return res.status(422).json({
      message:
        "Invalid Inputs. Please check that your title, description, and date format is correct and not empty.",
    })
  }

  let cache
  try {
    cache = new Cache({
      title,
      file,
      gps,
      description,
      hint,
      date,
      owner: userId,
    })
    const session = await mongoose.startSession()
    const user = await User.findById(userId)
    session.startTransaction()
    await cache.save({ session })
    user.ownedCaches.push(cache)
    await user.save({ session })
    await session.commitTransaction()
  } catch (error) {
    return console.log(error)
  }

  if (!cache) {
    return res.status(500).json({ message: "Cache request failed." })
  }

  return res.status(200).json({ bulletin: cache })
}

export const updateCache = async (req, res, next) => {
  const { userId, cacheId } = req.body
  let cache

  try {
    cache = await Cache.findById(cacheId)
  } catch (error) {
    console.log(error)
  }

  if (!cache) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }

  if (cache.owner != userId) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const { title, description, hint } = req.body

  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() === ""
  ) {
    return res.status(422).json({
      message:
        "Invalid Inputs. Please check that your title, description, and date format is correct and not empty.",
    })
  }
  let updateCache
  try {
    updateCache = await Cache.findByIdAndUpdate(cacheId, {
      title,
      description,
      hint,
    })
  } catch (error) {
    return console.log(error)
  }

  if (!updateCache) {
    return res.status(500).json({ message: "Cache request failed." })
  }

  return res.status(200).json({ message: "Updated Cache successfully" })
}

export const getAllCaches = async (req, res, next) => {
  let caches

  try {
    caches = await Cache.find()
  } catch (error) {
    console.log(error)
  }

  if (!caches) {
    return res.status(500).json({ message: "Failed to get Bulletins" })
  }

  return res.status(200).json({ caches })
}

export const getCacheById = async (req, res, next) => {
  // const extractedToken = req.headers.authorization.split(" ")[1]
  const { userId, cacheId } = req.body

  // if (!extractedToken || extractedToken.trim() === "") {
  //   return res.status(404).json({ message: "Token not found" })
  // }

  let cache
  try {
    cache = await Cache.findById(cacheId)
  } catch (error) {
    return res.status(404).json({ message: "Cache not found" })
  }

  if (!cache) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }

  console.log(cache)
  // console.log(cache)
  if (cache.owner != userId && !cache.unlockedUsers.includes(userId)) {
    return res
      .status(401)
      .json({ cache, message: "Haven't Unlocked this Cache" })
  }

  return res.status(200).json({ cache })
}

export const deleteCache = async (req, res, next) => {
  const { userId, cacheId } = req.body
  let cache

  try {
    cache = await Cache.findById(cacheId)
  } catch (error) {
    console.log(error)
  }

  if (!cache) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }

  if (cache.owner != userId) {
    return res.status(401)
  }

  let deleteCache
  try {
    deleteCache = await Cache.findByIdAndDelete(cacheId)
  } catch (error) {
    console.log(error)
  }

  if (!deleteCache) {
    return res.status(500).json({ message: "Something Unexpected Occured" })
  }
  console.log(deleteCache)
  res.status(200).json({ message: "Cache Deleted Successfully" })
}

export const unlockCache = async (req, res, next) => {
  // const extractedToken = req.headers.authorization.split(" ")[1]
  const { cacheId, userId } = req.body
  let cache

  try {
    user = await User.findById(userId)
    cache = await Cache.findById(cacheId)
  } catch (error) {
    console.log(error)
  }

  if (!cache) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }
  if (!extractedToken || extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" })
  }

  if (cache.unlockedUsers.includes(userId)) {
    return res.status(401).json({ message: "Already Unlocked" })
  }

  // let updateBulletin
  try {
    const session = await mongoose.startSession()
    const user = await User.findById(userId)
    session.startTransaction()
    cache.unlockedUsers.push(user)
    user.unlockedCaches.push(cache)
    await cache.save({ session })
    await user.save({ session })
    await session.commitTransaction()
  } catch (error) {
    return console.log(error)
  }

  if (!updateCache) {
    return res.status(500).json({ message: "Registration failed" })
  }

  return res.status(200).json({ message: "Unlocked Cache!" })
}
