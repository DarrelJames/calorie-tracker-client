const prod = {
  API_URL: 'https://murmuring-woodland-07227.herokuapp.com/'
}
const dev = {
  API_URL: 'http://localhost:3001'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
