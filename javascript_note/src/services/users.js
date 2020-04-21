import Api from './api';

const UserService = {
    register: (params) => Api.post('/users/register', params, {
      headers: {'Access-Control-Allow-Origin':'https://js-notes-client.herokuapp.com/'}
    }),
    login: async (params) => {
        const response = await Api.post("/users/login", params)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
      },
    logout: () => {
      localStorage.removeItem('user', null);
      localStorage.removeItem('token', null);
    }
}


export default UserService;