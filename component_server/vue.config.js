const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
    extract: false
  },
  lintOnSave: false,
};