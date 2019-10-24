import { FETCH_POST } from './types';

export const fetchPost = (posts) => {
  return {
    type: FETCH_POST,
    payload: posts
  }
}