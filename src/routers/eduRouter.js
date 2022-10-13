const express = require('express');
const router = new express.Router();
const Education = require('../models/education');


// // to render dynamic page
router.get('/', (req, res) => {
    res.render('index',{ 
        name:"home"
    })
})



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

// GET /api/educations
router.get('/education-history', async(req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
        
    } catch (err) {
        res.json({ message: err });
    }
} );

//GET /api/educations/id/:id
router.get('/education-history/id/:id', async(req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );

// post /api/educations/id/:id
router.post('/education-history', async(req, res) => {
    const education = new Education({
        examinationName: req.body.examinationName,
        councilBoard: req.body.councilBoard,
        passingYear: req.body.passingYear,
        institutionName: req.body.institutionName,
        grade: req.body.grade,
        description: req.body.description,
    });
    try {
        const savedEducation = await education.save();
        res.json(savedEducation);
    } catch (err) {
        res.json({ message: err });
    }
} );



//GET /api/educations/institutionName/:institutionName
router.get('/education-history/institutionName/:institutionName', async(req, res) => {
    try {
        const education = await Education.find({institutionName: req.params.institutionName});
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );

// patch /api/educations/institutionName/:institutionName
router.patch('/education-history/institutionName/:institutionName', async(req, res) => {
    try {
        const education = await Education.updateOne(
            { institutionName: req.params.institutionName },
            { $set: { institutionName: req.body.institutionName } }
        );
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );



//post /api/educations/institutionName/:institutionName
router.post('/education-history/institutionName/:institutionName', async(req, res) => {
    const education = new Education({
        examinationName: req.body.examinationName,
        councilBoard: req.body.councilBoard,
        passingYear: req.body.passingYear,
        institutionName: req.body.institutionName,
        grade: req.body.grade,
        description: req.body.description,
    });
    try {
        const savedEducation = await education.save();
        res.json(savedEducation);
    } catch (err) {
        res.json({ message: err });
    }
} );


//GET /api/educations/councilBoard/:councilBoard
router.get('/education-history/councilBoard/:councilBoard', async(req, res) => {
    try {
        const education = await Education.find({councilBoard: req.params.councilBoard});
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );

// patch /api/educations/councilBoard/:councilBoard
router.patch('/education-history/councilBoard/:councilBoard', async(req, res) => {
    try {
        const education = await Education.updateMany({councilBoard: req.params.councilBoard}, {$set: {councilBoard: req.body.councilBoard}});
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );


//post /api/educations/councilBoard/:councilBoard
router.post('/education-history/councilBoard/:councilBoard', async(req, res) => {
    const education = new Education({
        examinationName: req.body.examinationName,
        councilBoard: req.body.councilBoard,
        passingYear: req.body.passingYear,
        institutionName: req.body.institutionName,
        grade: req.body.grade,
        description: req.body.description,
    });
    try {
        const savedEducation = await education.save();
        res.json(savedEducation);
    } catch (err) {
        res.json({ message: err });
    }
} );



//post /api/educations/examinationName/:examinationName
router.post('/education-history/examinationName/:examinationName', async(req, res) => {
    const education = new Education({
        examinationName: req.body.examinationName,
        councilBoard: req.body.councilBoard,
        passingYear: req.body.passingYear,
        institutionName: req.body.institutionName,
        grade: req.body.grade,
        description: req.body.description,
    });
    try {
        const savedEducation = await education.save();
        res.json(savedEducation);
    } catch (err) {
        res.json({ message: err });
    }
} );

// patch /api/educations/examinationName/:examinationName
router.patch('/education-history/examinationName/:examinationName', async(req, res) => {
    try {
        const education = await Education.updateMany({examinationName: req.params.examinationName}, {$set: {examinationName: req.body.examinationName}});
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );




// GET /api/educations/examinationName/:examinationName
router.get('/education-history/examinationName/:examinationName', async(req, res) => {
    try {
        const education = await Education.find({examinationName: req.params.examinationName});
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



// // delete education by institutionName
router.delete("/education-history/:institutionName", async (req, res) => {
    try {
        const institutionName = req.params.institutionName;
        const education = await Education.findOneAndDelete({institutionName});
        if (!institutionName) {
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


module.exports = router;