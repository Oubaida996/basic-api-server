
'use strict';

const { expect } = require('@jest/globals');
const { afterEach } = require('jest-circus');
const logger = require('../src/middleware/logger');

describe('testing logger middleware',()=>{

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
    })

    afterAll(()=>{
        consoleSpy.mockRestore();
    })

    it('test log',()=>{
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('test next',()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalled();
    })
})

































// "use strict"

// const logger =require("../src/middleware/logger");
// const server =require("../src/server");

// const supertest =require("supertest");



// const request =supertest(server.app);

// describe("testing rout in logger" ,()=>{


//     it('test path home',async()=>{
//         const response = await request.get('/');
//         console.log(response.status);
//         console.log(response.req.path);
//         expect(response.req.path).toEqual("/");
//         expect(response.status).toEqual(200);
//         expect(response.text).toEqual("Welcome in home page on your local server ") ;

//     });

//     it('test path person path',async()=>{
//         const response = await request.get('/person');
//         console.log(response.query);
//         console.log(response.status);
//         console.log(response.req.path);
//         expect(response.req.path).toEqual("/person");
//         expect(response.status).toEqual(500);
//         expect(typeof response.body).toEqual("object") ;

//     });



// });