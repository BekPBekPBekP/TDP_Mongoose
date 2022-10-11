const { movieModel } = require("./movie_schema")

const router = require("express").Router();

router.post("/create", (req, res, next) =>
    movieModel.create(req.body)
        .then(result => res.status(201).send(result))
        .catch(err => next(err)));

router.get("/getAll", (req, res, next) => {
    return movieModel.find({})
        .then(result => res.send(result))
        .catch(err => next(err));

});

router.delete("/delete/:id", (req, res, next) => {
    const {id} = req.params;
    console.log(id);
    movieModel.findByIdAndDelete(id)
    .then(result => res.send(result))
    .catch(err => next(err));
});


router.patch('/replace/:id', (req, res, next) => {
    const {id} = req.params;
    const newMovie = req.body;
movieModel.findByIdAndUpdate(id, newMovie, next)
.then(result => res.send(newMovie))
.catch(err => next(err));
});

module.exports = router;