const Pin = require('../../models/Pin');
const authCheck = require('../../middleware/auth-check');

module.exports.createNewPin = async function(req, res) {
    try {
        const user = await authCheck(req.headers.authorization)
        const newPin = await new Pin({
        ...req.body,
        author: user._id
        }).save();
        const pinAdded = await Pin.populate(newPin, 'author');
        res.status(200).json(pinAdded);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports.getAllPins = async function(req, res) {
    try {
        await authCheck(req.headers.authorization)
        const allPins = await Pin.find({}).populate('author').populate('comments.author')
        res.status(200).json(allPins)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports.deletePin = async function(req, res) {
    try {
        await authCheck(req.headers.authorization)
        const deletePin = await Pin.findOneAndDelete({ _id: req.params.id}).exec();
        res.status(200).json(deletePin);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports.createComment = async function(req, res) {
    try {
        const user = await authCheck(req.headers.authorization)
        const newComment = { 
            text: req.body.text,
            author: user._id
         };

         const addComment = await Pin.findByIdAndUpdate(
             { _id: req.params.id },
             { $push: { comments: newComment } },
             { new: true }
            ).populate('author').populate('comments.author')
        res.status(200).json(addComment)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}