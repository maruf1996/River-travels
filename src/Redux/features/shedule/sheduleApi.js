import { api } from "@/Redux/api/apiSlice";

const sheduleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getshedules: builder.query({
      query: () => `/shedules`,
    }),
    postShedule: builder.mutation({
      query: ({ data }) => ({
        url: `/shedules/create-shedule`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["launch"],
    }),
    deleteShedules: builder.mutation({
      query: (id) => ({
        url: `/shedules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["launch"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetshedulesQuery,
  usePostSheduleMutation,
  useDeleteShedulesMutation,
} = sheduleApi;
