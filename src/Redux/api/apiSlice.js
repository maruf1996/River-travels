import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://river-travels-backend.vercel.app/api/v1",
  }),
  tagTypes: ["launch"],
  endpoints: () => ({}),
});
