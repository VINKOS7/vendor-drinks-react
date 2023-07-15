export const getUserProfile = () => {
    const sessionData = localStorage.getItem('hr.vision.profile');
    if (!sessionData)
        return null;

    return JSON.parse(sessionData);
};