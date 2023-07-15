import config from "../../config";

export const getOidcContent = () => {
    const storageContent = localStorage.getItem(`oidc.user:${config.AUTHORITY}:hr.vision`);
    if (!storageContent) {
        return null;
    }

    return JSON.parse(storageContent);
};
