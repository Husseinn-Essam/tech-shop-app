import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      name: String,
      price: Number,
      stock: Number,
      rating: Number,
      images: [String],
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],

  orders: [
    {
      id: String,
      date: Date,
      totalAmount: Number,
      status: String,
      details: [
        {
          name: String,
          price: Number,
          stock: Number,
          rating: Number,
          images: [String],
          quantity: Number,
        },
      ],
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
