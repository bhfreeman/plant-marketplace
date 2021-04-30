const router = require('express').Router();
const userController = require('../../controllers/userController');


// Create user route
router
    .route('/')
    .post(userController.create);

// Get user by id
router
    .route('/:id')
    .get(userController.findById)
    // Update user, to add favorites
    .put(userController.update)
    // Delete users favorites
    .delete(userController.remove);

module.exports = router;