import { getUserProfile } from '../getUserProfile';

export const getUserOrganization = () => {
    let profile = getUserProfile();
    return profile?.organization_id;
};