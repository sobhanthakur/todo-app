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

/*
 * Update the Todo Task
 */
const update = async (req, res) => {
  const { description, priority } = req.body;

  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).json({ msg: "Todo Not Found" });

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Update the todo here
    todo.description = description;
    todo.priority = priority;

    await todo.save();

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }

  return res;
};

module.exports = { add, update };
