const pool = require("../config/db");

const getAll = async (req, res, next) => {
  try {
    const data = await pool.query("select * from tuman");
    res.status(200).json({
      status: "succes",
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
  }
};
const add = async (req, res, next) => {
  try {
    console.log(req.body.name);
    const data = await pool.query(
      `insert into tuman(name) values($1) returning *`,
      [req.body.name]
    );
    console.log(data);

    res.status(200).json({
      status: "succes",
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
  }
};
const getOne = async (req, res, next) => {
  try {
    const data = await pool.query(`select * from tuman where id=$1`, [
      req.params.id,
    ]);
    res.status(200).json({
      status: "succes",
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
  }
};
const update = async (req, res, next) => {
  try {
    const data = await pool.query(
      "update tuman set name=$1 where id=$2 returning *",
      [req.body.name, req.params.id]
    );
    res.status(200).json({
      status: "succes",
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
  }
};
const delete1 = async (req, res, next) => {
  try {
    const data = await pool.query("delete from tuman where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "succes",
      data: data.rows,
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
