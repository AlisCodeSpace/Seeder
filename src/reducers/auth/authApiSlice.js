import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    apirequest: builder.mutation({
      query: ({ path, body }) => ({
        url: path,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useApiRequestMutation } = authApiSlice;
