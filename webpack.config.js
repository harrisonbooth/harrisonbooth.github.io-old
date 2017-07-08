module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build/",
    filename: "bundle.js"
  },
  devtool: "source-map"
}