const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function uploadFile(file) {
    const fileRef = ref(storage, `videos/${Date.now()}-${file.originalname}`);
    await uploadBytes(fileRef, file.buffer, { contentType: file.mimetype });
    return getDownloadURL(fileRef);
}

module.exports = { uploadFile };
