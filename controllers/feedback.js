const Feedback = require("../models/feedback");

exports.saveForm = (req, res, next) => {
  //console.log(req.body.name, req.body.email, req.body.text);
  const {name, email, text} = req.body;
  const newFeedback = new Feedback({
    name,
    email,
    text
  });
  newFeedback
    .save()
    .then(result => res.json({message: "feedback saved", info: result}))
    .catch(err => next(err));
  //res.send("form save route");
};
