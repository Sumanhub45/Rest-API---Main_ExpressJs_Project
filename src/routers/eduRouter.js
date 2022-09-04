const express = require('express');
const router = new express.Router();
const Education = require('../models/education');



// // to render dynamic page
router.get('/', (req, res) => {
    res.render('index',{ 
        name:"home"
    })
})


// GET /api/educations
router.get('/education-history', async(req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );

// POST /api/educations  
router.post("/education-history", async (req, res) => {
    const education = new Education(req.body);  
    try {
        await education.save();
        res.status(201).send(education);
    } catch (error) {
        res.status(400).send(error);
    }
});


// // delete education
router.delete("/education-history/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const education = await Education.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(404).send();
        } else {
            res.send(education);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


// // delete education by passingYear
router.delete("/education-history/:passingYear", async (req, res) => {
    try {
        const passingYear = req.params.passingYear;
        const education = await Education.findOneAndDelete({passingYear});
        if (!passingYear) {
            return res.status(404).send();
        } else {
            res.send(education);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});



// // update education
router.patch("/education-history/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const education = await Education.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(education);
    } catch (error) {
        res.status(404).send(error);
    }
});



// // to render dynamic page
router.get('/about', (req, res) => {
    res.render('about',{ 
        name:"about"
    })
})

router.get('/contact', (req, res) => {
    res.render('contactus',{ 
        name:"contact"
    })
})

router.get('/service', (req, res) => {
    res.render('service',{ 
        name:"service"
    })
})

router.post('/suman',(req, res) =>{
    res.send("hi suman")
})

router.get('/', (req, res) => {
    res.send("Hello world")
})

router.get('/about', (req, res) => {
    res.send("Hello world about")
})


module.exports = router;