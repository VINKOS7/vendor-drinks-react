export const getUserClaims = () => {
    const sessionData = localStorage.getItem('hr.vision.profile');
    if (!sessionData)
        return [];

    let profile = JSON.parse(sessionData);
    return [...profile.claims, ...profile.organization_apps_claims]
};