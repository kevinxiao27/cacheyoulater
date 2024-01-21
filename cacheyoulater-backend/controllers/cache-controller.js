import mongoose from "mongoose"
import Cache from "../models/Cache.js"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const addCache = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1]
  if (!extractedToken || extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" })
  }

  let userId
  // verify -- then decrypt the token ==> then store the admin id from the token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` })
    } else {
      userId = decrypted.id
      return
    }
  })

  const { title, file, description, date, gps } = req.body

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
  const extractedToken = req.headers.authorization.split(" ")[1]
  const id = req.params.id
  let bulletin

  try {
    bulletin = await Cache.findById(id)
  } catch (error) {
    console.log(error)
  }

  if (!bulletin) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }
  if (!extractedToken || extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" })
  }

  let orgId
  // verify -- then decrypt the token ==> then store the admin id from the token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` })
    } else {
      orgId = decrypted.id
      return
    }
  })

  if (bulletin.organization != orgId) {
    return res
      .status(401)
      .json({ message: "Unauthorized to complete this action" })
  }

  const { title, description, date, posterUrl, featured, registered } = req.body

  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() === "" ||
    !date ||
    date.trim() === ""
  ) {
    return res.status(422).json({
      message:
        "Invalid Inputs. Please check that your title, description, and date format is correct and not empty.",
    })
  }
  let updateBulletin
  try {
    updateBulletin = await Cache.findByIdAndUpdate(id, {
      title,
      description,
      orgId,
      date,
      posterUrl,
      featured,
      registered,
    })
  } catch (error) {
    return console.log(error)
  }

  if (!updateBulletin) {
    return res.status(500).json({ message: "Cache request failed." })
  }

  return res.status(200).json({ updateBulletin })
}

export const getAllCaches = async (req, res, next) => {
  let bulletins

  try {
    bulletins = await Cache.find()
  } catch (error) {
    console.log(error)
  }

  if (!bulletins) {
    return res.status(500).json({ message: "Failed to get Bulletins" })
  }

  return res.status(200).json({ bulletins })
}

export const getBulletinById = async (req, res, next) => {
  const id = req.params.id
  let bulletin

  try {
    bulletin = await Cache.findById(id)
  } catch (error) {
    console.log(error)
  }

  if (!bulletin) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }

  return res.status(200).json({ bulletin })
}

export const deleteCache = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1]
  const id = req.params.id
  let bulletin

  try {
    bulletin = await Cache.findById(id)
  } catch (error) {
    console.log(error)
  }

  if (!bulletin) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }
  if (!extractedToken || extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" })
  }

  let orgId
  // verify -- then decrypt the token ==> then store the admin id from the token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` })
    } else {
      orgId = decrypted.id
      return
    }
  })

  if (bulletin.organization != orgId) {
    return res
      .status(401)
      .json({ message: "Unauthorized to complete this action" })
  }

  let deleteBulletin
  try {
    deleteBulletin = await Cache.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
  }

  if (!deleteBulletin) {
    return res.status(500).json({ message: "Something Unexpected Occured" })
  }
  console.log(deleteBulletin)
  res.status(200).json({ message: "Cache Deleted Successfully" })
}

export const registerUser = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1]
  const id = req.params.id
  let bulletin

  try {
    bulletin = await Cache.findById(id)
  } catch (error) {
    console.log(error)
  }

  if (!bulletin) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }
  if (!extractedToken || extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" })
  }

  let userId
  // verify -- then decrypt the token ==> then store the admin id from the token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` })
    } else {
      userId = decrypted.id
      return
    }
  })

  var registeredList = bulletin.registered
  if (registeredList.includes(userId)) {
    return res.status(401).json({ message: "Already Registered" })
  } else {
    registeredList.push(userId)
  }

  // let updateBulletin
  try {
    const session = await mongoose.startSession()
    const user = await User.findById(userId)
    session.startTransaction()
    bulletin.registered.push(user)
    user.registeredBulletins.push(bulletin)
    await bulletin.save({ session })
    await user.save({ session })
    await session.commitTransaction()
  } catch (error) {
    return console.log(error)
  }

  if (!updateCache) {
    return res.status(500).json({ message: "Registration failed" })
  }

  return res.status(200).json({ message: "Successfully Registered" })
}

export const deregisterUser = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1]
  const id = req.params.id
  let cache

  try {
    cache = await Cache.findById(id)
  } catch (error) {
    console.log(error)
  }

  if (!cache) {
    return res.status(404).json({ message: "Failed to find Cache" })
  }
  if (!extractedToken || extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" })
  }

  let userId
  // verify -- then decrypt the token ==> then store the admin id from the token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` })
    } else {
      userId = decrypted.id
      return
    }
  })

  try {
    const session = await mongoose.startSession()
    const user = await User.findById(userId)
    session.startTransaction()
    cache.registered.pull(user)
    user.registeredBulletins.pull(cache)
    await user.save({ session })
    await session.commitTransaction()
  } catch (error) {
    return console.log(error)
  }

  if (!updateCache) {
    return res.status(500).json({ message: "Deregistration failed" })
  }

  return res.status(200).json({ message: "Successfully Deregistered" })
}
