import { baseApi } from '../../api/baseApi';

const homeSliderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHomeSlider: builder.query({
      query: () => ({ url: '/home-slider' }),
      transformResponse: (response) => response.data,
      providesTags: ['home-slider']
    }),
    createHomeSlider: builder.mutation({
      query: (data) => ({ url: '/home-slider', method: 'POST', body: data }),
      invalidatesTags: ['home-slider']
    }),
    deleteHomeSlider: builder.mutation({
      query: (id) => ({ url: `/home-slider/${id}`, method: 'DELETE' }),
      invalidatesTags: ['home-slider']
    })
  })
});

export const { useCreateHomeSliderMutation, useGetHomeSliderQuery, useDeleteHomeSliderMutation } =
  homeSliderApi;
