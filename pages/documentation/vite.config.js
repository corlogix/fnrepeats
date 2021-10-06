const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
    root: "src",
    plugins: [react()],
    build: {
        outDir: "../dist"
    },
    // assetsInclude: [
    //     "**/*.json"
    // ],
    // json: {
    //     stringify: true,
    //     namedExports: false,
    // }
});