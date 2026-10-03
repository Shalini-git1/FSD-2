const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // serve css

// In-memory tasks
let todos = [];

/* ==================== ROUTES ==================== */

// Home → render page
app.get("/", (req, res) => {
    res.render("index", { todos });
});

// Add task
app.post("/add", (req, res) => {
    const task = req.body.task;

    if (task.trim() !== "") {
        todos.push(task);
    }

    res.redirect("/");
});

// Delete task
app.get("/delete/:id", (req, res) => {
    const id = req.params.id;

    todos.splice(id, 1);

    res.redirect("/");
});

/* ==================== SERVER ==================== */

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});