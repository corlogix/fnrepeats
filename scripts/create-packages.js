const path = require('path'), fs = require('fs');

const documentationPath = path.resolve("pages/documentation");
console.log("documentationPath", documentationPath)

function fromDir(startPath, filter, callback) {
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        if(filename && (filename.includes("index") || filename.includes("test"))) continue;
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter, callback);
        }
        else if (filter.test(filename)) callback(filename);
    };
};

fromDir(path.resolve('./base-package/fnrepeats'), /\.ts$/, function (filename) {
    console.log('-- found: ', filename);
});