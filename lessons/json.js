import express from "express";

// server
const app = express();

// door port
const PORT = 3000;

// route
app.get("/", (req, res) => {
    res.send("try visiting /users or /about");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Cleopatra" },
        { id: 2, name: "Marshall" },
    ]);
});

app.get("/about", (req, res) => {
    res.json({ school: "codtrain Africa", course: "Node.js & Express", week: 1 });
});