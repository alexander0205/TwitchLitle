export const GlobalConfig = {
  twitch: {
    URL: process.env.REACT_APP_TWITCH_API_URL,
    CLIENT_ID: process.env.REACT_APP_TWITCH_API_CLIENT_ID,
    CLIENT_SECRET: process.env.REACT_APP_TWITCH_API_CLIENT_SECRET,
  },
  redirect: {
    login_redirect: 'https://io.ionic.starter/login',
  },
}
