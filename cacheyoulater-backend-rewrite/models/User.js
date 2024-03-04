import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: () => "Password must be at least six characters long",
    },
  },
  friends: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  incomingRequests: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  outgoingRequests: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  ownedCaches: [{ type: mongoose.Types.ObjectId, ref: "Cache" }],
  unlockedCaches: [{ type: mongoose.Types.ObjectId, ref: "Cache" }],
});

export default mongoose.model("User", userSchema);
