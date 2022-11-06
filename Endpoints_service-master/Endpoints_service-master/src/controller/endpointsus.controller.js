import axios from "axios";

const url = 'https://api-u.herokuapp.com/login'
const url2= 'https://api-u.herokuapp.com/sigin'

export const login = async function (req, res) {
    const data = {
        correo: req.body.correo,
        password: req.body.password
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

export const sigin = async function (req, res) {
    const data = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        password: req.body.password,
        tipo_u: req.body.tipo_u

    }
    await axios.post(url2, data)
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