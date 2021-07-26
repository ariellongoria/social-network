const router = require("express").Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReactions,
    deleteReactions,
} = require("../../controllers/tought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReactions);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReactions);

module.exports = router;
