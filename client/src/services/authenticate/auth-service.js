import axios from 'axios';

const authService = async idToken => {
  return await axios.post('/auth', null, {
    headers: {
      authorization: idToken,
    },
  });
}

export default authService;
