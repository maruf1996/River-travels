const { api } = require("@/Redux/api/apiSlice");

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (email) => `/profiles/${email}`,
    }),
  }),
  overrideExisting: true,
});

export const { useGetProfileQuery } = userApi;
