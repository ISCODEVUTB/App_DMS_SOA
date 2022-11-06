import fetch from "node-fetch";
import axios from "axios";

const url = 'https://apirest-carrito.herokuapp.com/carrito'

export const carrito = (req, res) => {

    fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))

}

export const carrito_id = function (req, res) {

    fetch(url+'/'+req.params.id)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))

}

export const update_carrito = async function (req, res) {
    const data = {
        id: req.body.id,
        amount: req.body.amount
    }
    await axios.patch(url, data)
        .then(function (response) {
            console.log(response.data);
            res.send(response.data);
        }).catch(function (error){
            if(error.response){
                let {status, statusText} = error.response;
                console.log(status, statusText);
                res.status(status).send(statusText);
            }else res.status(400).send(error);
        })
}