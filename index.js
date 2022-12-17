import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";

connectDB();

cloudinary.v2.config({
  cloud_name: "pkcd123",
  api_key: "977542638326989",
  api_secret: "CcgemNdH6pDA87PAFNA5fLE6ZEU",
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
