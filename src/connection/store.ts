import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@rtk-incubator/rtk-query/dist';
import { fileApi } from './fileApi';
import { vendorDrinksApi } from './vendor-drinks/vendorDrinksApi';

export const store = configureStore({
    reducer: {
        [vendorDrinksApi.reducerPath]: vendorDrinksApi.reducer,
        [fileApi.reducerPath]: fileApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat([
            vendorDrinksApi.middleware,
            fileApi.middleware
        ])
});

setupListeners(store.dispatch);

/*
    middleware: (getDefaultMiddleware) =>{
        let defaultMiddleware = getDefaultMiddleware()
        
        defaultMiddleware.concat(rtkQueryErrorLogger),
        defaultMiddleware.concat(basketApi.middleware)

        return defaultMiddleware
    }
 */