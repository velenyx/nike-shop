import type { AxiosInstance } from 'axios';
import axios from 'axios';

interface ApiConstructorParams {
  baseUrl: string;
  token: string;
}

export class API {
  public baseUrl: string;

  public request: AxiosInstance;

  constructor(options: ApiConstructorParams) {
    this.baseUrl = options.baseUrl;
    this.request = axios.create({
      baseURL: options.baseUrl,
      headers: {
        Authorization: `Bearer ${options.token}`
      }
    });
  }
}

const token = process.env.STRAPI_API_TOKEN || ''; // Provide a default value if the environment variable is not defined
export const strapiApi = new API({
  baseUrl: 'http://127.0.0.1:1337/api',
  token
});
