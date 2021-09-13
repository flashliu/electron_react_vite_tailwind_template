const path = require("path");

module.exports = {
  input: path.join(__dirname, "./src/main/index.ts"),
  output: {
    file: path.join(__dirname, "./dist/main/index.js"),
    format: "cjs",
    name: "ElectronMainBundle",
  },
  external: ["electron", "electron-is-dev", "path"],
};
