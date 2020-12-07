const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    password: String,
    profilePic: {
      type: String,
      default:
        'https://res.cloudinary.com/dlfxinw9v/image/upload/v1598905452/ohwid0itk8g1lo3lml3g.jpg'
    }
  },
  {
    timestamps: true
  }
);

const User = model('User', userSchema);

module.exports = User;
