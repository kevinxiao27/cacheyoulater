import mongoose from "mongoose"

const cacheSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  body: {
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
