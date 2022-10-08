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
      store.dispatch("logout");
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            buttons: 'Yes, delete it!'
        }).then(()=>{
            router.push("/sign-in");
        })


    }
    else if (statusCode===403) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            buttons: 'Yes, delete it!'
        })

    }


}