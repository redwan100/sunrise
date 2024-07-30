import { baseApi } from '../../api/baseApi.js';
const programApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProgram: builder.mutation({
      query: (payload) => ({
        url: `/program`,
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['programs']
    }),
    allProgram: builder.query({
      query: () => ({
        url: `/program`,
        method: 'GET'
      }),
      transformResponse: (response) => response.data,
      providesTags: ['programs']
    }),
    singleProgram: builder.query({
      query: (id) => ({
        url: `/program/${id}`,
        method: 'GET'
      }),
      transformResponse: (response) => response.data,
      providesTags: ['programs']
    }),
    deleteProgram: builder.mutation({
      query: (id) => ({
        url: `/program/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['programs']
    }),
    updateProgram: builder.mutation({
      query: (payload) => ({
        url: `/program/${payload.id}`,
        method: 'PATCH',
        body: payload
      }),
      invalidatesTags: ['programs']
    })
  })
});

export const {
  useCreateProgramMutation,
  useAllProgramQuery,
  useSingleProgramQuery,
  useDeleteProgramMutation,
  useUpdateProgramMutation
} = programApi;
