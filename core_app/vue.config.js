const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
  lintOnSave: false,
};
