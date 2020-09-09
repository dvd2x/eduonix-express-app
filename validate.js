const validate = (req, res) => {
  if (!req.body.lesson || req.body.lesson.length < 3) {
    res
      .status(400)
      .send("lesson required and should be at 3 least characters long.");
    return;
  }
};
module.exports = validate