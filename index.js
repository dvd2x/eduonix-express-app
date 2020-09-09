const express = require("express");
const validate = require("./validate");
const mongoose = require("mongoose");
const moviesRouter = require('./routes/movies')
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost/movies";
const db = mongoose.connection;

app.use(express.static('public'))

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("error", (error) =>
  console.error(error, "SOMETHING WENT VERY WRONG DAVID!!!")
);
db.once("open", () => console.log("CONGRATS YOU CONNECTED TO THE DATABASE!!!"));
app.use(express.json());
app.use('/movies', moviesRouter);
app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));


// const lessons = [
// { id: 1, lesson: "lesson 1" },
// { id: 2, lesson: "lesson 2" },
// { id: 3, lesson: "lesson 3" },
// ];
// //get route
// app.get("/", (req, res) => res.send("Hello World"));
// //get route
// app.get("/api/lessons", (req, res) => res.send(lessons));
// //get route
// app.get("/api/lessons/:id", (req, res) => {
// const lesson = lessons.find((l) => l.id === parseInt(req.params.id));
// if (!lesson) res.status(404).send("The lesson ID given was not found");
// res.send(lesson);
// });
// //post routes
// app.post("/api/lessons", (req, res) => {
//     validate(req, res)
// const lesson = {
//     id: lessons.length + 1,
//     lesson: req.body.lesson,
// };
// lessons.push(lesson);
// res.send(lesson);
// });
// //post route
// app.put("/api/lessons/:id", (req, res) => {
// const lesson = lessons.find((l) => l.id === parseInt(req.params.id));
// if (!lesson) res.status(404).send("The lesson ID given was not found");
// validate(req, res)
// lesson.lesson = req.body.lesson;
// res.send(lesson);
// });
// //delete route
// app.delete("/api/lessons/:id", (req, res) => {
// const lesson = lessons.find((l) => l.id === parseInt(req.params.id));
// if (!lesson) {
//     res.status(404).send("The lesson ID given was not found");
// }
// const index = lessons.indexOf(lesson);
// lessons.splice(index, 1);
// res.send(lesson);
// });

