import http from '../http-common';

class productService {
  getAll() {
    return http.get('/products');
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post('/products', data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }
}

export default new productService();
