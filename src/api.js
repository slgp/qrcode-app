import axios from 'axios';

const url = "https://slgp-qrcode-backend.herokuapp.com"

axios.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
}

  return req;
});

export const getAllDocuments = () => axios.get(`${url}/documents`);
export const createDocument = ({ ...data }) => axios.post(`${url}/documents`, data);
export const updateDocument = ({ id, ...data }) => axios.put(`${url}/documents/${id}`, data);
export const removeDocument = (id) => axios.delete(`${url}/documents/${id}`);

export const login = ({ ...data }) => axios.post(`${url}/users/login`, data)

export const searchDocument = ({ ...data }) => axios.post(`${url}/documents/search`, data);