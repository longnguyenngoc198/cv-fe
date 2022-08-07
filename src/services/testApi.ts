import AXIOS from './axios';

async function getPosts(params: any) {
  return AXIOS.get('https://jsonplaceholder.typicode.com/posts/20', {
    params,
  });
}

const testService = {
  getPosts,
};

export default testService;
