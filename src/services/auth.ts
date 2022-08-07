import { apiRoutesEnum } from 'enums/routes';
import { LoginResponse, UserCredentials } from 'types/user';
import AXIOS from './axios';

function login(body: UserCredentials): Promise<LoginResponse> {
  return AXIOS.post(apiRoutesEnum.LOGIN, body);
}

const authService = {
  login,
};

export default authService;
