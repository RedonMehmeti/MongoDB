const mongoose = require('mongoose');
require('dotenv').config();

// Dyjat e kryjn tnjejtin funksion
const  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/myDatabase';
// connect, then, catch
 .connect(mongoUrl)
.then(() => console.log('MongoDB u konektua me sukses'))
.catch(err => console.error('Konektimi me MongoDB deshtoi', err));


// Export i file database.js
module.exports = mongoose;