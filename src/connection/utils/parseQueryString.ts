export const parseQueryString = (search: string) => {
    let queryParams: any = {};

    search = search.slice(1);
    let parts = search.split('&');
    for (let i = 0; i < parts.length; ++i) {
        let params = parts[i].split('=');
        queryParams[params[0]] = params[1] || ''
    }

    return queryParams;
};