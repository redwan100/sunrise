import { baseApi } from '../../api/baseApi.js';

const momentOfSunriseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMoment: builder.mutation({
      query: (payload) => ({
        url: '/moment',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['moment']
    }),

    getAllMoment: builder.query({
      query: () => ({
        url: '/moment',
        method: 'GET'
      }),
      transformResponse: (response) => response.data,
      providesTags: ['moment']
    }),

    deleteMoment: builder.mutation({
      query: (id) => ({
        url: `/moment/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['moment']
    })
  })
});

export const { useCreateMomentMutation, useGetAllMomentQuery, useDeleteMomentMutation } =
  momentOfSunriseApi;
