import axios from 'axios';
import swal from 'sweetalert2';
import store from "@/store";
import router from "@/router";
import route from "@/router"
import Swal from "sweetalert2";
export const HTTP = axios.create({
    baseURL: `https://alps-driving-car.herokuapp.com`,
    withCredentials: true,
})


export const checkAuth = (statusCode)=>{
    if (statusCode===401){
        Swal.fire({
            title: "session expired",
            icon: 'warning',
            buttons: 'Ok'
        })
      store.dispatch("logout");


    }

    else if (statusCode===403) {
        Swal.fire({
            title: "You dont have permission to do this Action",
            icon: 'warning',
            buttons: 'Ok'
        })

    }


}