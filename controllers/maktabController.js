const pool = require("../config/db");

const getAll = async (req, res, next) => {
  try {
    const data = await pool.query(
      "select maktab.name as name_maktab,tuman.name as name_tuman from maktab join tuman on maktab.tuman_id=tuman.id"
    );
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
    const data = await pool.query(
      "insert into maktab(name,tuman_id) values($1,$2) returning *",
      [req.body.name, req.body.tuman_id]
    );
    console.log(req.body.name);
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
    const data = await pool.query(
      "select  maktab.name as name_maktab,tuman.name as name_tuman  from maktab join tuman on maktab.tuman_id=tuman.id where maktab.id=$1",
      [req.params.id]
    );
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
    const old = await pool.query("select * from maktab where id=$1", [
      req.params.id,
    ]);

    console.log(old);

    const data = await pool.query(
      "update maktab set name=$1,tuman_id=$2 where maktab.id=$3 returning *",
      [
        req.body.name || old.rows[0].name,
        req.body.tuman_id || old.rows[0].tuman_id,
        req.params.id,
      ]
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
    const data = await pool.query("delete from maktab where id=$1", [
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
