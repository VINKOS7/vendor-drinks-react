import { getOidcContent } from './getOidcContent';

export const getAccessToken = () => {
    const oidcContent = getOidcContent();
    return oidcContent?.access_token || null;
};