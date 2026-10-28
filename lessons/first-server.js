import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, world! This is my first Express server is alive.")
})

// Listen
app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }
    console.log(`Server running at http://localhost:${PORT}`);
});

