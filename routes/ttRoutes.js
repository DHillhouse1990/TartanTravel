const express = require('express');

const router = express.Router();
const controller = require('../controllers/ttControllers'); 

router.get('/', controller.landing_page)

router.get('/about', controller.about);

router.get('/asia', controller.asia);
router.get('/europe', controller.europe);

router.get('/reviews', controller.reviews);
router.get('/holiday', controller.holiday);
router.get('/blog', controller.blog);
router.get('/oceania', controller.oceania);
router.get('/hotels', controller.hotels);
router.get('/equipment', controller.equipment);


// custom 404 page
router.use(function(req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

// custom 505 page
router.use(function(err,req,res,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
})


module.exports = router; 