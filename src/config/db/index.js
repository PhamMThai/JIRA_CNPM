const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/nodejs-dev");
        console.log('Kết nối dữ liệu thành công!');
    } catch (error) {
        console.error('Kết nối thất bại!', error);
    }
}

module.exports = { connect };