import express from "express";
import { dbConnection } from "../db/dbConfig.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;

  if (!email || !password || !firstname || !lastname || !username) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide all required fields" });
  }

  try {
    const [user] = await dbConnection.execute(
      "select username, userid from users where username = ? or email = ? ",
      [username, email]
    );
    if (user.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "user already existed" });
    }

    if (password.length <= 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "password must be at least 8 characters" });
    }

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPasswrod = await bcrypt.hash(password, salt);

    await dbConnection.query(
      "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)",
      [username, firstname, lastname, email, hashedPasswrod]
    );
    return res.status(StatusCodes.CREATED).json({ msg: "user registered" });
  } catch (error) {}
  console.log(error.message);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "something went wrong, try again later!" });
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please enter all required fields" });
  }

  try {
    const [user] = await dbConnection.query(
      "select username, userid, password from users where email = ?",
      [email]
    );
    if (user.length == 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "invalid credential" });
    }
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "invalid credential" });
    }

    const username = user[0].username;
    const userid = user[0].userid;
    const token = jwt.sign({ username, userid }, process.env.JWT_SECRETE_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(StatusCodes.OK)
      .json({ msg: "user login successful", token });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong, try again later!" });
  }
}

export function check(req, res) {
  const { username, userid } = req.user;
  res.json({ msg: "There is a valid user ", username, userid });
}
