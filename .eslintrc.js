module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": 'webpack/dev.config.js'
      }
    }
  }
};
