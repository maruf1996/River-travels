const { api } = require("@/Redux/api/apiSlice");

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (email) => `/profiles/${email}`,
    }),
    getTraveller: builder.query({
      query: () => `/users`,
    }),
    deleteTraveller: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["launch"],
    }),
    getStuff: builder.query({
      query: () => `/stuffs`,
    }),
    deleteStuff: builder.mutation({
      query: (id) => ({
        url: `/stuffs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["launch"],
    }),
    getAdmin: builder.query({
      query: () => `/admins`,
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admins/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["launch"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetProfileQuery,
  useGetTravellerQuery,
  useGetStuffQuery,
  useGetAdminQuery,
  useDeleteTravellerMutation,
  useDeleteStuffMutation,
  useDeleteAdminMutation,
} = userApi;
