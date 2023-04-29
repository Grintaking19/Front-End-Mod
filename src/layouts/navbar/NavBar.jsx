import {React,useState} from "react";
import SignedInNavBar from "./SignedInNavBar"
import SignedOutNavBar from "./SignedOutNavBar";

export default function NavBar() {

  const [accessToken, setAccessToken]=useState(localStorage.getItem('user'))
  return (
    <div>
    {accessToken? <SignedInNavBar setAccessToken={setAccessToken}/> : <SignedOutNavBar setAccessToken={setAccessToken}/> }
    </div>
  );
}
