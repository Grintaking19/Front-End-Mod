import axios from "axios"
import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

//REACT_APP_API_DOMAIN
//https://hebtus.me/api/v1/oauth/login/googlefacebookverify/token

export default function GoogleFacebookToken() {
  let { token } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    async function postToken(ptoken) {
      try {
        console.log(ptoken);
        const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/oauth/login/googlefacebookverify/${ptoken}`);
        if (response.data.token) {
          localStorage.setItem('user', response.data.token);
          localStorage.setItem('userEmail', response.data.data.user.email);
        }
        console.log(localStorage.getItem('user'));
        navigate("/");
      }
      catch (err) {
        console.log(err);
      }
    }
    postToken(token);
  }, []);

  return (
    <div>

    </div>
  )


}