import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { Cup } from '../../pages/models/drink';
import { BlockIdsDrinkRequest, GetBlockIdsDrinkRequest, PushDrinksRequest, SetDrinksRequest, UnBlockIdsDrinkRequest } from './requests';
import { GetBlockDrinksResponse } from './responses';



export const vendorDrinksApi = createApi({
    reducerPath: 'drinks',
    baseQuery: baseQuery,
    endpoints: (builder) => {
        return ({
            blockDrinks: builder.mutation<void, BlockIdsDrinkRequest>({
                query: (data) => ({
                    url: `drinks/block/`,
                    method: 'POST',
                    body: data
                })
            }),
            unBlockDrinks: builder.mutation<void, UnBlockIdsDrinkRequest>({
                query: (data) => ({
                    url: `drinks/unblock/`,
                    method: 'POST',
                    body: data
                })
            }),
            getIdsBlockStatusDrink: builder.query<GetBlockDrinksResponse, GetBlockIdsDrinkRequest>({
                query: (data) => ({
                    url: `drinks/block/get/ids`,
                    method: 'POST',
                    body: data
                })
            }),
            pushDrinks: builder.mutation<void, PushDrinksRequest>({
                query: (data) => ({
                    url: `drinks/push/`,
                    method: 'POST',
                    body: data
                })
            }),
            setDrinks: builder.mutation<void, SetDrinksRequest>({
                query: (data) => ({
                    url: `drinks/set/`,
                    method: 'POST',
                    body: data
                })
            })
        });
    }
})

export const {
    useBlockDrinksMutation,
    useUnBlockDrinksMutation,
    usePushDrinksMutation,
    useSetDrinksMutation,
    useLazyGetIdsBlockStatusDrinkQuery
} = vendorDrinksApi;