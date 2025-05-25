import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import app from "./server_initialization/index.js";

const PORT  = process.env.PORT || 4000;

app.listen(PORT , ()=>{
    console.log(`Auth server is started at port ${PORT}`)
})