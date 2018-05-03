require('dotenv/config');

module.exports = {
    aws: {
        awsKey: process.env.AWS_KEY,
        secret: process.env.AWS_SECRET,
    },
}