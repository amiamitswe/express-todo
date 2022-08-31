const mongoose = require("mongoose");

const useSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  allTodo: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
});

module.exports = useSchema;
