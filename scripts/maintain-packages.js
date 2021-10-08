const path = require('path'), fs = require('fs'), formatJSON = require("json-format"), jsdoc = require("jsdoc-parse-plus");

const packageMeta = require("../package-meta.json");

const documentationDataPath = path.resolve("pages/documentation/src/package-data.json");
const documentationData = [];
console.log("documentationDataPath", documentationDataPath)

const baseLibraryPath = path.resolve('./base-package/fnrepeats');
console.log("baseLibraryPath", baseLibraryPath);

const packagesDirPath = path.resolve('./packages/');
console.log("packagesDirPath", packagesDirPath)

if (!fs.existsSync(packagesDirPath)) {
  fs.mkdirSync(packagesDirPath)
}

function fromDir(startPath, callback) {
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  const excludes = [
    "index",
    "node_modules",
    "test",
    ".d.ts"
  ];
  for (var i = 0; i < files.length; i++) {
    const isExcluded = excludes.reduce((acc, next) => {
      if (files[i].includes(next)) acc.push(true)
      return acc;
    }, []).includes(true);
    if (isExcluded) continue;
    var filePath = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
      fromDir(filePath, callback);
    }
    else if (/\.ts$/.test(filePath)) callback({
      filePath,
      fileName: files[i].replace(/\.ts$/, ''),
      buildFiles: [
        {
          filePath: path.join(baseLibraryPath, files[i].replace(/\.ts$/, '.js')),
          fileName: files[i].replace(/\.ts$/, '.js'),
          generatedFileName: "index.js"
        },
        {
          filePath: path.join(baseLibraryPath, files[i].replace(/\.ts$/, '.js.map')),
          fileName: files[i].replace(/\.ts$/, '.js.map'),
          generatedFileName: "index.js.map"
        },
        {
          filePath: path.join(baseLibraryPath, files[i].replace(/\.ts$/, '.d.ts')),
          fileName: files[i].replace(/\.ts$/, '.d.ts'),
          generatedFileName: "index.d.ts"
        },
      ]
    });
  };
};

const PACKAGE_JSON_TEMPLATE = (name) => ({
  name: `fnrepeats.${name.toLowerCase()}`,
  version: "0.0.0",
  files: ["*.js", "*.js.map", "*.d.ts"],
  main: "index.js",
  types: "index.d.ts",
  ...packageMeta
});

const README_TEMPLATE = (name) => `
# fnrepeats.${name.toLowerCase()}
The fnrepeats method '${name}'.

## Install
\`\`\`
// NPM
npm i fnrepeats.${name.toLowerCase()}@latest
// YARN
yarn add fnrepeats.${name.toLowerCase()}@latest
\`\`\`

## Examples

### Javascript
\`\`\`
const ${name} = require("fnrepeats.${name.toLowerCase()}");
\`\`\`

### Typescript
\`\`\`
import ${name} from "fnrepeats.${name.toLowerCase()}";
\`\`\`

## Helpful links:
- Documentation
- Source Code
`

fromDir(baseLibraryPath, function (fileInfo) {
  console.log('-- found: ', fileInfo);
  const packageName = fileInfo.fileName.toLowerCase();
  const packagePath = path.join(packagesDirPath, packageName);
  if (!fs.existsSync(packagePath)) {
    console.log("packages does not exist yet, creating...");
    fs.mkdirSync(path.join(packagesDirPath, packageName));
  }
  fs.writeFileSync(path.join(packagePath, "README.md"), README_TEMPLATE(fileInfo.fileName))
  fileInfo.buildFiles.forEach(({ filePath, fileName, generatedFileName }) => {
    if (fs.existsSync(filePath)) {
      const buff = fs.readFileSync(filePath);
      fs.writeFileSync(path.join(packagePath, generatedFileName), buff)
    }
  });
  if (!fs.existsSync(path.join(packagePath, "package.json"))) {
    fs.writeFileSync(path.join(packagePath, "package.json"), formatJSON(PACKAGE_JSON_TEMPLATE(packageName)))
  }

  const fileBuffer = fs.readFileSync(fileInfo.filePath).toString()
  documentationData.push({
    fileName: fileInfo.fileName,
    jsDoc: jsdoc.parse(fileBuffer)
  });
});

fs.writeFileSync(documentationDataPath, formatJSON(documentationData));