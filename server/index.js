const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!

mongoose
   .connect(
      "mongodb+srv://sahilansarimondal:sahil1234@sahildb.jqkiszf.mongodb.net/Courses"
   )
   .then(() => console.log("MongoDB is Connected"))
   .catch((err) => console.log(err));

app.listen(3000, () => console.log("Server running on port 3000"));
