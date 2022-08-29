const pool = require("../config/db");

const getAll = async (req, res, next) => {
  try {
    const data = await pool.query("select * from tuman");
    res.status(200).json({
      status: "succes",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
const add = async (req, res, next) => {
  try {
    const data = await pool.query("select * from tuman");
    res.status(200).json({
      status: "succes",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
const getOne = async (req, res, next) => {
  try {
    const data = await pool.query("select * from tuman");
    res.status(200).json({
      status: "succes",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
const update = async (req, res, next) => {
  try {
    const data = await pool.query("select * from tuman");
    res.status(200).json({
      status: "succes",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
const delete1 = async (req, res, next) => {
  try {
    const data = await pool.query("select * from tuman");
    res.status(200).json({
      status: "succes",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  add,
  getOne,
  update,
  delete1,
};
