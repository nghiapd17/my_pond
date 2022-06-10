import React from "react";
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router";
import authentAPI from "../Apis/authent";

const SignIn = () => {

  const navigate = useNavigate();


  const handleClick = () => {
    const data = authentAPI
    .init('http://localhost:3000/signin')
    .then((result) => {
      console.log(result?.data);
      navigate(result?.data?.authUrl);

    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  }

  const responseGoogle = (response:any) => {
    console.log(response);

  //   const data = authentAPI
  //   .signin(response.accessToken, 'nghia', response?.profileObj?.email)
  //   .then((result) => {
  //     console.log(result?.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // console.log(data);\



  }

  return (<><GoogleLogin
    clientId="77209795770-defg2j23gdainjn38sp6n5dhp97sv13l.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <button onClick={() => handleClick()}>onClick</button>
  </>)
     
};

export default SignIn;
