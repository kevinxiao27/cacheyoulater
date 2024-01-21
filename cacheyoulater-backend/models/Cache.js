import mongoose from "mongoose"
import mongodb from "mongodb"

const cacheSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  file: {
    type: Buffer,
    contentType: String,
    required: true,
  },
  gps: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  unlockedUsers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
})

export default mongoose.model("Cache", cacheSchema)
