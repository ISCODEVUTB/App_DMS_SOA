import axios from "axios";
import fetch from "node-fetch";

const url = 'https://api-mercadopag.herokuapp.com/crear-orden'


export const feedback = function (req, res) {
    fetch(url+'/'+req.params.id+req.query.status+req.query.merchant_orders_id)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then(data => res.send(data))
}

export const crearorden = async function (req, res) {
    let {items} = req.body
    if(!items){
        res.status(403)
        res.send({error: 'No se están enviando los items para la creación de la preferencia'})
    }
    else {


        await axios.post(url, {items})
            .then(function (response) {
                console.log(response.data);
                res.send(response.data);
            }).catch(function (error) {
                if (error.response) {
                    let {status, statusText} = error.response;
                    console.log(status, statusText);
                    res.status(status)
                    res.send({error: 'Revise los datos para la creación de la orden, datos necesarios {quantity y unit_price'})

                } else res.status(400).send(error);
            })
    }
}