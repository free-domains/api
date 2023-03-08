module.exports = async (req, res) => {
    const fs = require("fs");

    const file = fs.readFileSync(__dirname + "/../responses/index.html", { encoding: "utf8" });

    return res.send(file);
}