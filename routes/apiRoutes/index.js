const router = require('express').Router();
const tasksRoutes = require('./notesRoutes');

router.use(tasksRoutes);

module.exports = router;