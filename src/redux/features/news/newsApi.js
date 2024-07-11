import { baseApi } from '../../api/baseApi';

const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNews: builder.mutation({
      query: (payload) => ({
        url: '/news',
        method: 'POST',
        body: payload
      })
    }),

    getAllNews: builder.query({
      query: () => ({
        url: '/news',
        method: 'GET'
      }),
      transformResponse: (response) => response.data
    })
  })
});

export const { useCreateNewsMutation, useGetAllNewsQuery } = newsApi;
