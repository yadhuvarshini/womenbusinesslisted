import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type : String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type : String,
        required: true,
        minlength: 6,
        select: false, // Exclude password from queries by default
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'referrer', 'partner'],
        default: 'user', // Default to null if not specified
    },
    isProfileComplete: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false, // Default to false if not specified
    },
    verificationToken: {
        type: String,
        default: null, // Default to null if not specified
    },
    verificationExpires: {
        type: Date,
        default: null, // Default to null if not specified
    },
    resetPasswordToken: {
        type: String,
        default: null, // Default to null if not specified
    },
    resetPasswordExpires: {
        type: Date,
        default: null, // Default to null if not specified
    },
    profilePicture: {
        type: String,
        default: null, // Default to null if not specified
    },
    business: {
        name: String,
        description: String,
        category: String,
        website: String,
        socialMedia: {
            platform: {
                type: String,
                enum: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'Other'],
                default: 'Other'
            },
            link: {
                type: String
            }
        },
        email: String,
        phone: String,
        whatsappNumber: String,
        contact: String,
        address: {
            street: String,
            city: String,
            state: String,
            country: String,
            zipCode: String,
        },
        logo: String,
        banner: String,
        paid: {
            type: Boolean,
            default: false,
        },
    }
},{
    timestamps: true, 
}); 

export default mongoose.model('User', userSchema);
