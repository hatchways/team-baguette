const Request = require('../models/Request')

async function getReqs(req, res, next) {
    try {
        if (!req.user.id) {
            return res.sendStatus(401)
        }
        let dogReqs = await Request.find({ 
                $or: [{
                    sitterId: req.user.id}, 
                    {userId: req.user.id}
                ]
            }) 
            .populate("user", 'username')
            .sort({ start: 'asc' })
        let filteredReqs
        if (req.params.type === 'sitter') {
            filteredReqs = dogReqs.filter(el => el.sitterId == req.user.id)
        } else {
            filteredReqs = dogReqs.filter(el => el.userId == req.user.id)
        }
        res.status(200).json(filteredReqs)
    } catch (error) {
        next(error)
    }
}

async function updateReqs(req, res, next) {
    let updateDoc
    if (req.body.accepted === 'accepted') {
        updateDoc = {
            accepted: true,
            declined: false,
        }
    } else {
        updateDoc = {
            accepted: false,
            declined : true,
        }
    }
    try {
        await Request.findOneAndUpdate({_id: req.body.reqId}, {
            $set: updateDoc
        })
        res.status(200).json({message: "Updated Successfully"})
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
            userId: req.body.userId,
            sitterId: req.body.sitterId,
            start: req.body.start,
            end: req.body.end,
            dogType: req.body.dogType,
            specialNotes: req.body.specialNotes,
        })
        res.status(200).json({message: "Created Successfully"})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getReqs,
    updateReqs, 
    createReqs,
}
