export const GlobalConfig = {
  twitch: {
    URL_AUTH: process.env.REACT_APP_TWITCH_AUTH_URL,
    URL_API: process.env.REACT_APP_TWITCH_API_URL,
    CLIENT_ID: process.env.REACT_APP_TWITCH_API_CLIENT_ID,
    CLIENT_SECRET: process.env.REACT_APP_TWITCH_API_CLIENT_SECRET,
  },
  redirect: {
    login_redirect: 'https://us-central1-twitchlitle.cloudfunctions.net/twitchlitle_redirect'//'https://io.ionic.starter/login'
    ,
  },
}
