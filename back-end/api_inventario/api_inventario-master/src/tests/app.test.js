import request from'supertest';
import mysql from 'mysql2/promise'
import app from'../app';
import {pool} from "../db.js";

let testServer
beforeAll(() =>{


});

afterAll(() =>{

    mysql.createPool({pool})

})

describe('Pruebas sobre la API', () =>{


    describe('GET /inventory', () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get('/inventory').send();
        })

        it('La ruta funciona', async () => {
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json')

        })

        it('La peticion devuelve un array', async () => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })

    /*describe('POST /inventory_id', () => {

        const newData = {
            id:'B16654',
            "title":"El principito",
            "author":"Antoine de Saint",
            "detail":"Nuevo",
            "amount":2,
            "purchase_price":17000,
            "sale_price":32000,
            "url_i":"https://www.masleer.com/uploads/news/07032019164431726700.jpg"
        }
        it('La ruta funciona', async () => {
            const response = await request(app).post('/inventory').send(newData);

            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json');
        })


    })*/

})