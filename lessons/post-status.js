import express from "express";
const app = express();
 
const PORT = 5000;

app.use(express.json());

const users = [
    { id: 1, name: "Cleopatra" },
    { id: 2, name: "Marshall" },

]

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = req.body;

    console.log("Recieved:", newUser);

    users.push(newUser);

    res.status(201).json(newUser);
});




app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }
    console.log(`Server running at http://localhost:${PORT}`);
});
