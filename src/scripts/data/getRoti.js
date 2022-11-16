const url = "https://betis23-oprec.herokuapp.com";

const getRoti = (accessToken) => {
  const options = {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  fetch(`${url}/roti/`, options)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log("ini hasil roti2nya");
      console.log(responseJson);

      const daftarRoti = responseJson.data;
      console.log("ini isi roti");
      console.log(daftarRoti);

      if (daftarRoti.length == 0) {
        document.querySelector(
          "#cards-container"
        ).innerHTML = `Belum ada roti nih`;
      }
    })
    .catch((err) => {
      alert("error di roti");
      console.log(err);
    });
};

export default getRoti;
