const fs = require("fs");
const util = require("util");

module.exports = (req, res, next) => {
  var log_file = fs.createWriteStream("../logs/debug.log", { flags: "w" });
  var log_stdout = process.stdout;
  console.log = function (d) {
    //
    log_file.write(req.body + "\n");
    log_stdout.write(util.format(d) + "\n");
  };
  next();
};
