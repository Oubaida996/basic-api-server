"use strict";

const server = require("../src/server");
const supertest = require('supertest');
const request = supertest(server.app);




describe("server test", () => {

    it('test 404 on a bad route', async () => {
        const response = await request.get('/food');
        expect(response.status).toEqual(404);
    })

    it('test 404 on a bad method', async () => {
        const response = await request.get('/food');
        expect(response.status).toEqual(404);
    })

    it('test on a the GET all', async () => {
        const response = await request.get('/foods');
        expect(response.status).toEqual(200);
    })

    it('test on a the GET all', async () => {
        const response = await request.get('/foods');
        // console.log("response.body", response.body);
        expect(typeof response.body).toEqual("object");
    })

    it('test on a the update one', async () => {
        const response = await request.put('/foods/1');
       
        // console.log("response.body", response.body);
        expect(response.body).toEqual([0]);
    })

    it('test on a the Delete one', async () => {
        const response = await request.delete('/foods/1');
        // console.log("response.body", response.body);
        expect(response.text).toEqual("deleteFood");
    })

    it('test on a the GET all', async () => {
        const response = await request.get('/foods');
        expect(response.status).toEqual(200);
    })

}

);
