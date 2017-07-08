module.exports = {
  entry: "src/index.js",
  output: {
    path: __dirname + "/build/",
    filename: "bundle.js"
  },
  devtool: "source-map"
}