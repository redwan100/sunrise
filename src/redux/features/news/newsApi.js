import { baseApi } from '../../api/baseApi';

const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNews: builder.mutation({
      query: (payload) => ({
        url: '/news',
        method: 'POST',
        body: payload
      }),
      providesTags: ['news'],
      invalidatesTags: ['news']
    }),

    getAllNews: builder.query({
      query: () => ({
        url: '/news',
        method: 'GET'
      }),
      transformResponse: (response) => response.data,
      providesTags: ['news'],
      invalidatesTags: ['news']
    }),

    deleteNews: builder.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['news']
    })
  })
});

export const { useCreateNewsMutation, useGetAllNewsQuery, useDeleteNewsMutation } = newsApi;
