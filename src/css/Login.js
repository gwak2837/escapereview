import React from 'react';
import useScript from '../hooks/useScript';
import '../css/Login.css';

function Login() {
  useScript('https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js');
  
  if (window.naver?.LoginWithNaverId) {
    let naverLogin = new window.naver.LoginWithNaverId({
      clientId: '2ABxM8NFS_Qai1uxio1t',
      callbackUrl: 'http://localhost:3000/#/login/callback',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60
      }
    });

    naverLogin.init();
    console.log(naverLogin.user);
    naverLogin.getLoginStatus(function(status) {
      if (status) {
        console.log(naverLogin.user.getEmail());
        console.log(naverLogin.user.getNickName());
        console.log(naverLogin.user.getProfileImage());
        console.log(naverLogin.user.getBirthday());
        console.log(naverLogin.user.getId());
        console.log(naverLogin.user.getAge());
      } else {
        console.log('AccessToken이 올바르지 않습니다.');
      }
    });
    window.addEventListener('load', function() {
      naverLogin.getLoginStatus(function(status) {
        if (status) {
          /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
          var email = naverLogin.user.getEmail();
          console.log(email);
          if (email === undefined || email == null) {
            alert('이메일은 필수정보입니다. 정보제공을 동의해주세요.');
            /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
            naverLogin.reprompt();
            return;
          }

          window.location.replace('localhost:3000/#/cafe');
        } else {
          console.log('callback 처리에 실패하였습니다.');
        }
      });
    });
  }
  return (
    <div className="login__container">
      <div id="naverIdLogin" />
    </div>
  );
}

export default Login;
/*

*/
