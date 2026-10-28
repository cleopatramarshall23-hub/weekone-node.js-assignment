// route parameter: /users/5 -req.params.id is "5"

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json({ message: `You asked for user ${id}`, type: typeof id });
});
// query string:/search?q=react&limit=18 - req.query is { q: "react", limit: "10" }
app.get("/search", (req, res) => {
    const {q, limit} = req.query;
    res.json ({ searchTerm: q, limit: limit  })
})

    app.listen(PORT, (error) => {
    if (error) {
        console.error("Could not start the server:", error.message);
        return;
    }
    console.log(`Server running at http://localhost:${PORT}`);
});
