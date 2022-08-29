const dotenv = require("dotenv").config();
const app = require("./middlewares/app");

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
