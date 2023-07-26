import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (newUser) => {
                console.log("Create User:", newUser);
                return {
                    url: `registeration`,
                    method: 'POST',
                    body: {
                        username: 'foo',
                        email: 'ghj',
                        password: '123'
                    },
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        }),

        verifyUser: builder.mutation({

        }),

        //getUser by /user/:username
        getUser: builder.query({
            query: (username) => {
                console.log(username)
                return {
                    url: ``,
                    method: 'GET'
                }
            }
        }),

        updateUser: builder.mutation({
            query: () => {

            },

            resetPassword: builder.mutation({

            })
        })
    })
})

const { useCreateUserMutation, useVerifyUserMutation, useGetUserQuery, useUpdateUserMutation, useResetPasswordMutation } = profileApi