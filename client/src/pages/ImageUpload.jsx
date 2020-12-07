import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:5005/api/auth/uploadFile`
});

const sendFileToBackend = (file, userId) => {
  const formBody = new window.FormData();
  formBody.append('image', file);
  const id = userId;

  return api
    .post(`/${id}`, formBody)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err));
};

export default class ImageUpload extends Component {
  state = {
    user: this.props.user,
    uploadedImage: null
  };

  handleFormSubmission = event => {
    event.preventDefault();
    const image = this.state.uploadedImage;

    sendFileToBackend(image, this.state.user.session.userId._id)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const uploadedImage = event.target.files[0];
    // console.log(uploadedImage);

    this.setState({
      uploadedImage
    });
  };

  render() {
    // console.log(this.state);
    // console.log(this.state.uploadedImage);
    return (
      <div>
        <h1>Cloudinary Image Upload</h1>
        <form onSubmit={this.handleFormSubmission}>
          <input type="file" name="user-image" onChange={this.handleInputChange} />
          <button type="submit">Upload Image</button>
        </form>
        {this.state.user.session.userId.profilePic && (
          <div>
            <h1>Current Users Profile Pic</h1>
            <img width="300" src={this.state.user.session.userId.profilePic} alt="uploaded file" />
          </div>
        )}
      </div>
    );
  }
}
