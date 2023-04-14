
// import { deeplink } from "@kyonru/node-deeplink";

const port = 3002;

async function lol() {
  let lol = await fetch(
    "https://359e-156-222-12-177.ngrok-free.app/api/v1/signup",
    {
      mode: "no-cors",
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": 1,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: {
          firstName: "lolaaaat",
          lastName: "loleeeeen",
        },
        email: "hehehehehhe@gmail.com",
        password: "123456789",
        confirmPassword: "123456789",
      }),
    }
  );
  console.log(lol);
}
lol(); 