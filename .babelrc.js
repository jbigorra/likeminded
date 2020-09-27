const isTestEnv = process.env.NODE_ENV === 'test';

module.exports = {
  "plugins": ["@babel/plugin-transform-runtime"],
  "presets": [
    ["@babel/preset-env", { modules: isTestEnv ? 'commonjs' : false }],
    "@babel/preset-react",
  ]
}
