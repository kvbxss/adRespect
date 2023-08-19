const masonry = new Macy({
  container: ".masonry",
  trueOrder: false,
  waitForImages: false,
  margin: 24,
  columns: 3,
  breakAt: {
    1200: 3,
    940: 2,
    520: 1,
  },
});
