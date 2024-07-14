import { baseApi } from '../../api/baseApi';

const helpPoorPeople = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHelpPoorPeople: builder.query({
      query: () => ({ url: '/help-poor-people', method: 'GET' }),
      transformResponse: (response) => response.data,
      providesTags: ['help-poor-people']
    }),
    createHelpPoorPeople: builder.mutation({
      query: (data) => ({ url: '/help-poor-people', method: 'POST', body: data }),
      invalidatesTags: ['help-poor-people']
    }),
    deleteHelpPoorPeople: builder.mutation({
      query: (id) => ({ url: `/help-poor-people/${id}`, method: 'DELETE' }),
      invalidatesTags: ['help-poor-people']
    })
  })
});

export const {
  useGetHelpPoorPeopleQuery,
  useCreateHelpPoorPeopleMutation,
  useDeleteHelpPoorPeopleMutation
} = helpPoorPeople;
