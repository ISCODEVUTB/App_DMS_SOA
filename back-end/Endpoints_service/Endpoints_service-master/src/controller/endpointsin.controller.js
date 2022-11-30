import axios from "axios";
import fetch from "node-fetch";

const url = 'https://apirest-inventario.herokuapp.com/inventory'

export const inventario = (req, res) => {

    fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))
}

export const inventario_id = function (req, res) {
    fetch(url+'/'+req.params.id)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))
}

export const create_inventory = async function (req, res) {
    const data = {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        detail: req.body.detail,
        amount: req.body.amount,
        purchase_price: req.body.purchase_price,
        sale_price: req.body.sale_price,
        url_i: req.body.url_i
    }
    await axios.post(url, data)
        .then(function (response) {
            console.log(response.data);
            res.send(response.data);
        }).catch(function (error) {
            if (error.response) {
                let {status, statusText} = error.response;
                console.log(status, statusText);
                res.status(status).send(statusText);
            } else res.status(400).send(error);
        })
}

export const update_inventory = async function (req, res) {
    const data = {
        id: req.body.id,
        amount: req.body.amount,
        purchase_price: req.body.purchase_price,
        sale_price: req.body.sale_price
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

export const delete_inventory = async function (req, res) {
    const data = {
        id: req.body.id,
    }
    await axios.delete(url, {data})
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
