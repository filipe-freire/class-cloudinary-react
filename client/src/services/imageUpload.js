import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:5005/api/auth/uploadFile`
});

export const sendFileToBackend = (file, userId) => {
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
