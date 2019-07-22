const config = {};
   config.oAuthClientID = '247502799799-nfjuirk469n065m0jipl22akfdq6nhht.apps.googleusercontent.com';
   config.oAuthclientSecret = '1iEAUkuUX3NXd4ZwdCd02uKo';
   config.oAuthCallbackUrl = 'https://shielded-brushlands-68752.herokuapp.com/auth/google/callback';
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



//{"web":{"client_id":"247502799799-nfjuirk469n065m0jipl22akfdq6nhht.apps.googleusercontent.com","project_id":"photo-247517","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"1iEAUkuUX3NXd4ZwdCd02uKo"}}
