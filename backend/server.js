const app = require("./src/app");

const connectDB = require("./src/DB/db");

const router = require("./src/routes/contact.routes");



const PORT = 5000;

/* DATABASE */

connectDB();

/* MIDDLEWARE */





/* ROUTES */

app.use("/auth", router);

/* SERVER */

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});