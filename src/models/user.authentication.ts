import { APITwitch,Result } from '../api/api.twitch'
import { GlobalConfig } from '../GlobalConfig'
import { OpenUrlBrowser } from '../helpers/index'
import { createAuthProvider, } from '../utils/auth.token'

export const [useAuth, authFetch, login, logout, getToken] = createAuthProvider<{
  accessToken: string
  refreshToken: string,
  accessTokenKey: String
}>({
  accessTokenKey: 'accessToken',
})

export const browserAuthentication = (): void => {
  const _APITwitch = new APITwitch()
  const urlTwitchAuth = _APITwitch.getURLAuthToken(
    GlobalConfig.redirect.login_redirect,
  )
  OpenUrlBrowser(urlTwitchAuth)
}

export const getAccesTokenByAccesCode = async (code: string): Promise<Result> => {
  const _APITwitch = new APITwitch()
  return _APITwitch.getAccesToken(code, GlobalConfig.redirect.login_redirect)
}



