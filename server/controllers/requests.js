const Request = require('../models/Request')
module.exports = {
    getReqs,
    updateReqs, 
    createReqs,
}
function getReqs(req, res, next) {
    try {
        Request.find({sitter_id: req.body.id}, (err, post) => {
            res.status(200).json(post)
        })
    } catch (error) {
        next(error)
    }
}
function updateReqs(req, res, next) {
    let updateDoc
    if (req.body.accepted) {
        updateDoc = {
            accepted: true
        }
    } else if (req.body.declined) {
        updateDoc = {
            declined : true
        }
    }
    try {
        Request.updateOneAndUpdate({_id: req.body.id}, {
            $set: updateDoc
        }, 
            (err, result) => {
                if (err) {
                    res.send(error)
                } else {
                    res.status(200).json(result)
                }
            }
        )
    } catch (error) {
        next(error)
    }
}
function createReqs(req, res, next) {
    try {
        Request.create({
            user_id: req.body.id,
            sitter_id: req.body.sitter_id,
            start: req.body.start,
            end: req.body.end,
            dogType: req.body.dogType,
            specialNotes: req.body.specialNotes,
        }, (err, post) => {
            if (err) {
                res.send(error)
            } else {
                res.status(200).json(post)
            }
        })
    } catch (error) {
        next(error)
    }
}