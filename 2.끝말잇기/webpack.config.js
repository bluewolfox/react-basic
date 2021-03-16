const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실서비스는 production
  devtool: "eval", // 빠르게
  resolve: {
    extensions: [".js", ".jsx"], // 알아서 확장명을 찾아서 만들어준다.
  },

  entry: {
    // 입력
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // 규칙을 적용할 파일들
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    // 출력
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
