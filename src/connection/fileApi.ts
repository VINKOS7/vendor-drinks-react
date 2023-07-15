import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface AddFileImagesProductProps {
    url: string
    file: File
    fileType: string
}

export const fileApi = createApi({
    reducerPath: 'files',
    baseQuery: fetchBaseQuery({}),
    endpoints: (builder) => ({
        addFileImagesProduct: builder.mutation<void, AddFileImagesProductProps>({
            query: (dataQuery) => ({
                url: dataQuery.url,
                method: 'PUT',
                body: dataQuery.file,
                headers: {
                    'Content-Type': dataQuery.fileType
                }
            })
        })
    })
})

export const { useAddFileImagesProductMutation } = fileApi;