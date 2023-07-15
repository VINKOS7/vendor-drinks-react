import { UserManager, WebStorageStateStore } from 'oidc-client';
import config from './config';


const authConfig = {
    client_id: 'E.Shop',
    redirect_uri: `${config.REDIRECT_URI}`,
    response_type: 'code',
    scope: 'openid profile',
    authority: config.AUTHORITY,
    post_logout_redirect_uri: `${config.APP_API}`,
    silent_redirect_uri: `${config.REDIRECT_URI}/silent_renew`,
    automaticSilentRenew: true,
    loadUserInfo: true,
    filterProtocolClaims: true,
    accessTokenExpiringNotificationTime: 4,
    userStore: new WebStorageStateStore({ store: localStorage}),
    client_secret: "901564A5-E7FE-42CB-B10D-61EF6A8F3654"
};

const userManager = createUserManager(authConfig);
export default userManager;

function createUserManager(config: any) {
    return new UserManager(config);
}
