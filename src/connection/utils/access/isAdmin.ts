import { StructureManage } from '../../models/Claims';
import { getUserClaims } from '../getUserClaims';

export const isAdmin = () => {
    const claims = getUserClaims();
    return claims.includes(StructureManage);
};