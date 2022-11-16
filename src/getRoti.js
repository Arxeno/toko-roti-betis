const getRoti = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwODM4ODczLCJpYXQiOjE2NjgyNDY4NzMsImp0aSI6Ijg5OTE2N2ZjNzQ5NTQyZmRiMWVjZWIwNmZlZjNiMGNkIiwidXNlcl9pZCI6NzF9.4ImNX3bFSkla9bu-SL2xWK5wJdxpcas-_vSe4BeNCEU",
    },
  };

  fetch("http://betis23-oprec.herokuapp.com/roti/", options)
    .then((response) => console.log(response))
    .catch((err) => console.log("error ngab"));
};

console.log("hello");

export default getRoti;
