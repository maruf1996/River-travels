import { api } from "@/Redux/api/apiSlice";

const rootApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getleunchs: builder.query({
      query: () => `/launchs`,
    }),
    singleLaunch: builder.query({
      query: (id) => `/launchs/${id}`,
    }),
    deleteLaunchs: builder.mutation({
      query: (id) => ({
        url: `/launchs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["launch"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetleunchsQuery,
  useDeleteLaunchsMutation,
  useSingleLaunchQuery,
} = rootApi;
