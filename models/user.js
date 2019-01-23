var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { isEmail } = require('validator');


var userSchema = new Schema({
    name: { type: String, required: 'Name is required' },
    profile: { type: String, default: 'http://res.cloudinary.com/doqzgok2j/image/upload/v1541927228/client/profile/admin_1246391.png' },
    phone: { type: String, required: 'Phone is required', unique: true, },
    password: { type: String, required: 'Password is required' },
    token: { type: String },
    otp: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: [isEmail, 'Invalid email']
    }
}, {
        timestamps: true,
        collection: 'User',
        strict: true,
        versionKey: false
    });


userSchema.methods.saveToken = async function () {
    let payload = {
        _id: this.get('_id').toString(),
        type: 'User'
    };

    let token = getToken(payload);
    this.set('token', token);
    return await this.save();
}
module.exports = mongoose.model('User', userSchema);