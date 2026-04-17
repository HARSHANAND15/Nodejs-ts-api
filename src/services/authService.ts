import User from "../models/userModel";
import bcrypt from "bcrypt";

export const registerUser = async (email: string, password: string) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashed
  });

  return user;
};