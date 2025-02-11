import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";
import config from "./config";

app.listen(config.port, () => {
  console.log(`Hello on http://127.0.0.1:${config.port}`);
});
