import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type : String,
        required: true,
        unique:true,
        lowercase: true,
    },
    password:{
        type : String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'referrer', 'partner'],
        default: null, // Default to null if not specified
    },
    isVerified: {
        type: Boolean,
        default: false, // Default to false if not specified
    },
    businessName: {
        type: String,
    },
    businessDescription: {
        type: String,
    },
    businessCategory: {
        type: String,
    },
    businessWebsite: {
        type: String,
    },
    businessSocialMedia: {
        type: String,
        enum: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'Other'],
        default: 'Other', // Default to 'Other' if not specified
    },
    whatsappNumber: {
        type: String,
    },
    businessEmail: {
        type: String,
    },
    businessPhone: {
        type: String,
    },
    businessAddress: {
        type: String,
    },
    businessCity: {
        type: String,
    },
    businessState: {
        type: String,
    },
    businessCountry: {
        type: String,
    },
    businessZipCode: {
        type: String,
    },
    businessLogo: {
        type: String,
    },
    businessBanner: {
        type: String,
    },
    businessContact: {
        type: String,
    },

},{
    timestamps: true, 
}); 

export default mongoose.model('User', userSchema);
