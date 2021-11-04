module.exports = {
  productionSourceMap: false,
  assetsDir: 'assets',
  publicPath: '/notes/dist/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Notes',
    },
  },
};
