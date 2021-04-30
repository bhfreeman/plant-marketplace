const router = require('express').Router();
const userController = require('../../controllers/userController');


// Create user route
router
    .route('/')
    .post(userController.create);

    // router
    // .route('/all')
    // .get(userController.findAll)
// Get user by id
router
    .route('/:id')
    .get(userController.findById)
    // Update user, to add favorites
    .put(userController.update);



module.exports = router;