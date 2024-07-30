import { baseApi } from '../../api/baseApi.js';

const recentEventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecentEvent: builder.query({
      query: () => ({ url: '/recent-event', method: 'GET' }),
      transformResponse: (response) => response.data,
      providesTags: ['recent-event']
    }),
    createRecentEvent: builder.mutation({
      query: (data) => ({ url: '/recent-event', method: 'POST', body: data }),
      invalidatesTags: ['recent-event']
    }),
    deleteRecentEvent: builder.mutation({
      query: (id) => ({ url: `/recent-event/${id}`, method: 'DELETE' }),
      invalidatesTags: ['recent-event']
    })
  })
});

export const {
  useCreateRecentEventMutation,
  useGetRecentEventQuery,
  useDeleteRecentEventMutation
} = recentEventApi;
