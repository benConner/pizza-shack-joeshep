'use strict'

const { Router } = require('express');
const router = Router()

// public routes
router.use(require('./about'))
router.use(require('./contact'))
router.use(require('./login'))
router.use(require('./register'))
router.use(require('./root'))

// login guard middleware. Send them home if not logged in
// TODO: define isAuthentincated
// router.use((req, res, next) => {
//   if (req.isAuthentincated()) {
//     next();
//   } else {
//     res.redirect('/login')
//   }
// });

// privit routes

// router.use(require('/logout'))
// router.use(require('/order'))

module.exports = router;
