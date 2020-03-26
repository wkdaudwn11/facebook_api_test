module.exports = {
  test: async (req, res) => {
    res.status(200).json({
      test: "test"
    });
  }
};
