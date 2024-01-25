import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/shared/consts/api';
import { API_ENDPOINTS } from '@/shared/consts/endpoints';

import { Post } from '../model/types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], number>({
      query: (page) => ({
        url: API_ENDPOINTS.GET_POSTS(),
        method: 'GET',
        params: {
          _page: page,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: build.query<Post, string>({
      query: (id) => ({
        url: API_ENDPOINTS.GET_POSTS_BY_ID(id),
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
