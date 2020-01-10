import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://base-konovalov.firebaseio.com/'
});

// axiosOrders.interceptors.request.use(req => {
//   console.log('[in request interseptor]', req);
//   return req
// });

// axiosOrders.interceptors.response.use(res => {
//   console.log('[in response interseptor]', res);
//   return res
// }, error => {
//   console.log(error)
// });

export default axiosOrders;