import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import config from './config';
import { getAccessToken } from './getAccessToken';


export const baseQuery = fetchBaseQuery({
    baseUrl: `${config.VENDOR_DRINKS}`,
    prepareHeaders: (headers, { getState }) => {
        const token = getAccessToken();
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        //console.log(config)
        return headers
    },
})
