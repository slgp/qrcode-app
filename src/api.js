import axios from 'axios';

const API = axios.create({ baseURL: "https://slgp-qrcode-backend.herokuapp.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
}

  return req;
});

export const getAllDocuments = () => API.get('/documents');
export const createDocument = ({ ...data }) => API.post('/documents', data);
export const updateDocument = ({ id, ...data }) => API.put(`/documents/${id}`, data);
export const removeDocument = (id) => API.delete(`/documents/${id}`);

// export const login = ({ ...data }) => API.post('/users/login', data)

export const login = async ({ ...data }) => {
  const response = await fetch(
    `/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};


export const searchDocument = async ({ title }) => {
  const response = await fetch(
    `/documents/search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(title),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};