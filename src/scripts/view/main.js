import "../components/dash-board";
import dashBoardSection from "../data/dashBoardSection";

const url = "https://betis23-oprec.herokuapp.com";

const main = () => {
  const form = document.querySelector("#form-login");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(document.querySelector("#username").value);
    console.log(document.querySelector("#email").value);
    console.log(document.querySelector("#password").value);

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const dataLogIn = {
      username: `${username}`,
      email: `${email}`,
      password: `${password}`,
    };
    console.log(dataLogIn);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataLogIn),
    };

    fetch(`${url}/auth/login/`, options)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log("ini hasilnya");
        console.log(responseJson);

        const accessToken = responseJson.access_token;
        console.log(accessToken);

        dashBoardSection(responseJson, username);
      })
      .catch((error) => {
        alert("Maaf atas ketidaknyamanannya, tapi keknya ada yg salah");
        console.log(error);
      });
  });
};

export default main;
