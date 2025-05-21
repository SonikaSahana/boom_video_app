const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const user= require('./routes/userRoutes');
const video = require('./routes/videoRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/auth', user);
app.use('/api/videos', video);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
