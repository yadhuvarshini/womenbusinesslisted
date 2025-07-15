import bcrypt from 'bcrypt';

//password sent from the register function will be hashed here 

// Function to hash a password
export const hashPassword = async (password) => {
    try {
        const EncryptedPassword = await bcrypt.hash(password,10)
        return EncryptedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
    }
}