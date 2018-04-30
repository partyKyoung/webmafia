import axios from 'axios';

import {kakaoKey} from 'lib/private';

const authHost = 'https://kauth.kakao.com';
const apiHost = 'https://kapi.kakao.com';

export function getKaKaoCode () {
  const api = '/oauth/authorize';

  axios.get(authHost + api, {
    params: {
      'client_id': kakaoKey,
      'redirect_uri': '/authorize',
      response_type: 'code'
    }
  }).then(() => {}).catch(() => {});
}

export function getKakaoToken () {
  const api = '/oauth/token';

  axios.post(authHost + api, {
    'grant_type': 'authorization_code',
    'client_id': kakaoKey,
    'redirect_uri': '/users/signup',

  }).then(() => {
    console.log('sibal');
  }).catch((e) => {
    console.error(e);
  });
}

export function kakaoSignUp () {
  const api = '/v1/user/signup';

  axios.post('/test', {}, {headers: { 
    Authorization: `Bearer ${kakaoKey}` 
  }}).then(() => {}).catch((e) => {});
}