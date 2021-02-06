// const express = require('express');
// const router = express.Router()


// const authCheck = (req, res, next) => {
//     // console.log(req)
//     if (!req.user) {
//         res.redirect('/auth/login')
//     } else {
//         next()
//     }
// }

// router.get('/', authCheck, (req, res) => {
//     // res.render('profile')
//     console.log("Profile:", req.user);
//     res.render('Profile', { data: req.user })
// })
// module.exports = router

const express = require('express');
const router = express.Router()



const authCheck = (req, res, next) => {
    // console.log(req)
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        next()
    }
}

router.get('/', authCheck, (req, res) => {
    // res.render('profile')
    console.log("Profile:", req.user);
    res.render('profile', { data: req.user })
})
module.exports = router