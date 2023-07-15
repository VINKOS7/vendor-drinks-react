import { getUserClaims } from '../getUserClaims';

export const verifyClaims = (claims: string[]) => {
    let userClaims = getUserClaims();
    let claimsIntersection = userClaims.filter(value => claims.includes(value));
    return claimsIntersection && claimsIntersection.length > 0;
};