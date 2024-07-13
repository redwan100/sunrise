import { baseApi } from '../../api/baseApi';

const homeSliderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHomeSlider: builder.query({
      query: () => ({ url: '/home-slider' }),
      providesTags: ['home-slider']
    }),
    createHomeSlider: builder.mutation({
      query: (data) => ({ url: '/home-slider', method: 'POST', body: data }),
      invalidatesTags: ['home-slider']
    })
  })
});

export const { useCreateHomeSliderMutation, useGetHomeSliderQuery } = homeSliderApi;
