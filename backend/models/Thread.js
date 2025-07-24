import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "assistant"],
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 5000 
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const ThreadSchema = new mongoose.Schema({
  threadId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    default: "New Chat"
  },
  userId: {
    type: String,
    required: false 
  },
  tags: {
    type: [String],
    default: []
  },
  messages: [MessageSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ThreadSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model("Thread", ThreadSchema);
