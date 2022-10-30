const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|mp4)$/, // to import images and fonts
        loader: "url-loader",
        options: { 
          imit: false,
          esModule: false
        },
      },
      {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ],
      },
    ],
  },
};