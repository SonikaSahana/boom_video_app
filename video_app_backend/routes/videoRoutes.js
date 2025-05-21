const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Video = require('../models/videoModel');
const { uploadFile } = require('../util/firebase');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        res.sendStatus(403);
    }
}

router.get('/', async (req, res) => {
    const videos = await Video.find().sort({ uploadedAt: -1 });
    res.json(videos);
});

router.post('/upload', authMiddleware, upload.single('video'), async (req, res) => {
    const { title } = req.body;
    const videoUrl = await uploadFile(req.file);
    const video = new Video({ title, videoUrl });
    await video.save();
    res.sendStatus(201);
});

router.post('/like/:id', async (req, res) => {
    await Video.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
    res.sendStatus(200);
});

module.exports = router;
