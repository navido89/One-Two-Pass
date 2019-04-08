module.exports = {
    init(app){
        const staticRoutes = require ("../routes/static");
        const topicRoutes = require("../routes/topics");
        const advertisementRoutes = require("../routes/advertisements");
        const postRoutes = require ("../routes/posts");
<<<<<<< HEAD
        const flairRoutes = require ("../routes/flairs");
=======
        const userRoutes = require("../routes/users");
>>>>>>> Authentication-Checkpoint

        app.use(staticRoutes);
        app.use(topicRoutes);
        app.use(advertisementRoutes);
        app.use(postRoutes);
<<<<<<< HEAD
        app.use(flairRoutes);
=======
        app.use(userRoutes);
>>>>>>> Authentication-Checkpoint

    }
}