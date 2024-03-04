import mongoose from "mongoose";

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
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
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
});

export default mongoose.model("Cache", cacheSchema);
