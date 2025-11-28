import "dotenv/config"; 
import path from "node:path";
import express from "express"; 
import { router } from "./app/routers/router.js";
import { internalErrorPage, notFoundPage } from "./app/middlewares/error.middleware.js";

const app = express(); 
const __dirname = import.meta.dirname;
const port = process.env.PORT || 3000 ; 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(router); 
app.use(internalErrorPage);
app.use(notFoundPage);

app.listen(port, () => {
    console.log(`Project oCoffee is listening on http://localhost:${port}`); 
})