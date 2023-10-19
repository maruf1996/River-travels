import { api } from "@/Redux/api/apiSlice";

const rootApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRoots: builder.query({
      query: () => `/roots`,
    }),
    postRoot: builder.mutation({
      query: ({ data }) => ({
        url: `/roots/create-root`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["launch"],
    }),
    deleteRoot: builder.mutation({
      query: (id) => ({
        url: `/roots/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["launch"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetRootsQuery, usePostRootMutation, useDeleteRootMutation } =
  rootApi;
