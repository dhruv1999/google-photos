const config = {};
   config.oAuthClientID = '1090389463761-9o4mrakp79i48npnhmd92inh2lalul61';
   config.oAuthclientSecret = 'oZuCLxtGrORgzhXv-ieDpMUa';
   config.oAuthCallbackUrl = 'http://127.0.0.1:8080/auth/google/callback';
   config.port = process.env.PORT || 8080;
   config.scopes = [
  'https://www.googleapis.com/auth/photoslibrary.readonly',
  'profile',
];
    config.photosToLoad = 150;  
    config.searchPageSize = 100;
    config.albumPageSize = 50;
    config.apiEndpoint = 'https://photoslibrary.googleapis.com';
module.exports = config;