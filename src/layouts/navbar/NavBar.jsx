import {React,useState} from "react";
import SignedInNavBar from "./SignedInNavBar"
import SignedOutNavBar from "./SignedOutNavBar";

/**

    A component that chooses to render one of two navbars (SignedInNavBar or SignedOutNavBar) based on whether the user is logged in or not.
    @component
    @returns {JSX.Element} - The rendered component.
    @name NavBar
    @example
    return (
    <NavBar />
    );
    */

export default function NavBar() {
  
  const [accessToken, setAccessToken]=useState(localStorage.getItem('user'))
  return (
    <div>
    {accessToken? <SignedInNavBar setAccessToken={setAccessToken}/> : <SignedOutNavBar setAccessToken={setAccessToken}/> }
    </div>
  );
}
