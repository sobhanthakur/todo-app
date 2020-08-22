const Todo = require("../../models/Todo");

/*
 * Create new Todo
 */
const add = async (req, res) => {
  const { title, description, priority } = req.body;

  try {
    // Create new Todo Task
    todo = new Todo({
      title,
      description,
      priority,
      user: req.user.id,
    });

    // Save to DB (Commit)
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }

  return res;
};

module.exports = { add };
