const fs = require("fs");
const path = require("path");
const formatJSON = require("json-format");

const meta = path.resolve("package-meta.json");
const metaJSON = JSON.parse(fs.readFileSync(meta) || "\{\}");

console.log(metaJSON)

function fromDir(startPath, callback) {
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        if(filename && (filename.includes("node_modules") || filename.includes("-lock"))) continue;
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, callback);
        }
        else if (files[i] === "package.json") callback(filename);
    };
};

fromDir(path.resolve('./'), function (filename) {
    const packageJSON = JSON.parse(fs.readFileSync(filename) || "\{\}");
    for (const key in metaJSON) {
        packageJSON[key] = metaJSON[key];
    }
    fs.writeFileSync(filename, formatJSON(packageJSON));
});