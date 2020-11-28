import BaseService from './baseService';
import API from '../config/rest';

const login = (email, password) => {
  return BaseService.post(API.LOGIN, { email, password });
};

export default { login };
