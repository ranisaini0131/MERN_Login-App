import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({

        registeration: builder.mutation({
            query: (data) => { 
            return {
                body: data,
                method: 'POST',
                url:'registeration'
            }
            }
        }),

        login: builder.mutation({
            query: (data) => {
                return {
                    body: data,
                    method: 'POST',
                    url:'login'
                }
            }
        }),

        userProfile: builder.query({
            query: (token) => {
                return {
                    method: 'GET',
                    url: `userProfile`,
                    headers: {authorization:`Bearer ${token}`}
                }
            }
        }),
        generateOTP: builder.mutation({
            query: (data) => { 
                return {
                body:data,
                method: 'POST',
                url:'generateOTP'
            }
            }
        }),

        verifyOTP: builder.mutation({
            query: (data) => { 
            return {
                body: data,
                method: 'POST',
                url:'verifyOTP'
            }
            }
        }),
        
        getAllUser: builder.query({
            query: () => "getAllUser"
        }),

    })
})




export const { useGetAllUserQuery, useRegisterationMutation, useLoginMutation, useUserProfileQuery,useGenerateOTPMutation,useVerifyOTPMutation } = profileApi