import axios from "axios";

export const getGreeting = () => {
  return axios
    .get("http://localhost:8080/bills/")
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });
};

export const withdraw = (value: string) => {
  return axios
    .post(`http://localhost:8080/bills/withdraw/${value}`)
    .then(function (response: any) {
      return response;
    })
    .catch(function (error: any) {
      return error.response;
    });
};
