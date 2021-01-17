const mongoose = require("../database/connection");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },

  senha: {
    type: String,
    require: true,
    select: false,
  },

  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;  

    next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
