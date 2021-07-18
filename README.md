
# TwitchLitle APP


## Authentication with twitch manual. Popup 

This proyect is develop using IONIC,REACT, CAPACITOR
**Configure the TwichApi**
First, generate the ApiKey, read.
 https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#oauth-authorization-code-flow
 
go to .env  and change the keys
REACT_APP_TWITCH_API_CLIENT_ID = "Client ID"
REACT_APP_TWITCH_API_CLIENT_SECRET = "Client Secret"

**Note: URLSCHEME**
The API of twitch only accept URLs HTTPS in the redirect, in this case, I created a little API with firebase, the application will call Twitch and Twitch will redirect to firebase API and the API will redirect to the app.



## Getting started

```bash
$ git clone https://github.com/alexander0205/TwitchLitle.git
$ cd  TwitchLitle
$ npm install
$ npm start 
`s`

## Production build

```bash
$ npm run build
```

## iOS

We can run it as a ios application using XCode or CLI VSCODE


```bash 
RELEASE
$ npm run ios 
DEV
$ npm run ios-dev 
```




### ANDROID

```bash
RELEASE
$ npm run android 
DEV
$ npm run android-dev 
```

{"mode":"full","isActive":false}