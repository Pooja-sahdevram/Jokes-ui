import express from "express";
import cors from "cors";
const app = express();

const jokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!",
  },
  {
    id: 2,
    title: "What do you call fake spaghetti?",
    content: "An impasta!",
  },
  {
    id: 3,
    title: "Why don't programmers like nature?",
    content: "It has too many bugs.",
  },
  {
    id: 4,
    title: "Why did the scarecrow win an award?",
    content: "Because he was outstanding in his field!",
  },
  {
    id: 5,
    title: "What do you get when you cross a snowman and a vampire?",
    content: "Frostbite.",
  },
];
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server is started at ", port);
});
