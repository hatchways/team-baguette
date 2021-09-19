const Request = require('../models/Request')

function getReqs(req, res, next) {
    try {
        if (!req.user.id) {
            return res.sendStatus(401)
        }
        Request.find({ $or: [{ userId: req.user.id }, { sitterId: req.user.id }] 
            }, (err, post) => {
                res.status(200).json(post)
        })
    } catch (error) {
        next(error)
    }
}

async function updateReqs(req, res, next) {
    let updateDoc
    if (req.body.accepted) {
        updateDoc = {
            accepted: true
        }
    } else {
        updateDoc = {
            declined : true
        }
    }
    try {
        await Request.findOneAndUpdate({_id: req.body.id}, {
            $set: updateDoc
        })
        res.status(200).json({ message: "Updated Successfully"})
    } catch (error) {
        next(error)
    }
}

async function createReqs(req, res, next) {
    try {
        if (!req.body.userId || !req.body.sitterId || !req.body.start || !req.body.end) {
            return res.sendStatus(400)
        }
        await Request.create({
            user_id: req.body.id,
            sitter_id: req.body.sitter_id,
            start: req.body.start,
            end: req.body.end,
            dogType: req.body.dogType,
            specialNotes: req.body.specialNotes,
        })
        res.status(200).json({message: "Created Successfuly"})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getReqs,
    updateReqs, 
    createReqs,
}
