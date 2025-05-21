const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: String,
    videoUrl: String,
    likes: { type: Number, default: 0 },
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', videoSchema);
