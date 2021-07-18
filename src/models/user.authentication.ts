import { APITwitch } from "../api/api.twitch";
import { GlobalConfig } from "../GlobalConfig";
import { OpenUrlBrowser } from "../helpers/index";
import { createAuthProvider } from "../utils/auth.token";
import { ResultApi, ResultAuth } from "../api/api.entities";

/**
 * [useAuth, authFetch, login, logout, getToken]
 */
export const [useAuth, authFetch, login, logout, getToken] =
  createAuthProvider<{
    accessToken: string;
    refreshToken: string;
    accessTokenKey: String;
  }>({
    accessTokenKey: "accessToken",
  });

  /**
   * 
   */
export const browserAuthentication = (): void => {
  const _APITwitch = new APITwitch();
  const urlTwitchAuth = _APITwitch.getURLAuthToken(
    GlobalConfig.redirect.login_redirect
  );

  OpenUrlBrowser(urlTwitchAuth);
};

export const getAccesTokenByAccesCode = async (
  code: string
): Promise<ResultAuth> => {
  const _APITwitch = new APITwitch();
  return _APITwitch.getAccesToken(code, GlobalConfig.redirect.login_redirect);
};

export const logoutRevokeToken = async () => {
 
  const token = await getToken();
  const _APITwitch = new APITwitch();
   _APITwitch.revokeToken(token);
   logout()
};

export const getUserData = async (): Promise<ResultApi> => {
  const token = await getToken();
  const _APITwitch = new APITwitch();
  return _APITwitch.getUserData(token);
};
