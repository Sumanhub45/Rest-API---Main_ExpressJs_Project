const express = require('express');
const router = new express.Router();
const User = require('../models/user');


// // // to render dynamic page
// router.get('/', (req, res) => {
//     res.render('index',{ 
//         name:"home"
//     })
// })

// // // to render dynamic page
// router.get('/about', (req, res) => {
//     res.render('about',{ 
//         name:"about"
//     })
// })

// router.get('/contact', (req, res) => {
//     res.render('contactus',{ 
//         name:"contact"
//     })
// })

// router.get('/service', (req, res) => {
//     res.render('service',{ 
//         name:"service"
//     })
// })


// GET /api/user
router.get('/user', async(req, res) => {
    try {
        const user = await User.find();
        res.json(user);
        
    } catch (err) {
        res.json({ message: err });
    }
} );


//GET /api/user/id/:id
router.get('/user/id/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
} );

//GET /api/user/email/:email
router.get('/user/email/:email', async(req, res) => {
    try {
        const user = await User.find({email:req.params.email});
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
} );



// POST /api/user  
router.post("/user", async (req, res) => {
    const user = new User(req.body);  
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});


// // delete User
router.delete("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const User = await User.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(404).send();
        } else {
            res.send(User);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


// // update User
router.patch("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const User = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(User);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;