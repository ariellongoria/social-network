const { User, Thought } = require("../models");

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thought found with this id!" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    createThought({ body }, res) {
        Thought.create(body).then(({ _id, username }) => {
            return User.findOneAndUpdate({ username: username }, { $push: { thoughts: _id } }, { new: true }).then(
                (dbUserData) => res.json(dbUserData)
            );
        });
    },
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thought found with this id!" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then((deletedThought) => {
                if (!deletedThought) {
                    return res.status(404).json({ message: "No thought found with this id!" });
                }
                return User.findOneAndUpdate(
                    { username: deletedThought.username },
                    { $pull: { thoughts: params.id } },
                    { new: true }
                ).then((dbUserData) => {
                    res.json(dbUserData);
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    addReactions({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    deleteReactions({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
};

module.exports = thoughtController;
