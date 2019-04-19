import axios from 'axios';
import config from '../config';

const axiosBase = axios.create({
  baseURL: config.api.baseUrl,
});

export default {
  todo: {
    create: (data) => axiosBase({
      url: '/todos',
      method: 'post',
      data,
    }),

    update: (id, data) => axiosBase({
      url: `/todos/${id}`,
      method: 'put',
      data,
    }),

    delete: (id) => axiosBase({
      url: `/todos/${id}`,
      method: 'delete',
    }),

    patch: (id, data) => axiosBase({
      url: `/todos/${id}`,
      method: 'patch',
      data,
    }),

    get: (id) => axiosBase({
      url: `/todos/${id}`,
      method: 'get',
    }),

    getAll: () => axiosBase({
      url: '/todos',
      method: 'get',
    }),
  },
};
