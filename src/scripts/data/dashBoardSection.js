import getRoti from "./getRoti";

const dashBoardSection = (accessToken, username) => {
  document.body.innerHTML = `<dash-board></dash-board>`;

  document.querySelector("nav").innerHTML = `Selamat Datang ${username}!`;

  getRoti(accessToken);
};

export default dashBoardSection;
