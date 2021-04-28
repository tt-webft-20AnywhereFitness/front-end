import axios from 'axios';

export const axiosWithAuth = () => {

    return axios.create({
        headers: {
            Authorization: localStorage.getItem("token")
        },

        baseURL: "https://anywhere-fitness-app-tt-20.herokuapp.com/api",
    });
};