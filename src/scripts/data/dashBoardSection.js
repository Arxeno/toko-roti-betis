const dashBoardSection = (res, username) => {
  document.body.innerHTML = `<dash-board></dash-board>`;

  document.querySelector("nav").innerHTML = `Selamat Datang ${username}`;
};

export default dashBoardSection;
