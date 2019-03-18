const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marco = "http://localhost:3000/marco";

describe("routes: static", ()=> {

    describe("GET /", ()=> {

        it ("should return status code 200", (done)=> {
            request.get(base, (err,res,body)=> {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });

    describe("GET /marco", ()=>{
        
        it ("body of the response should include the string polo and return status code 200", (done)=>{
            request.get(marco, (err,res,body)=> {
                expect(res.statusCode).toBe(200);
                expect(body).toContain('polo');
                done();
            });
        });
    });
});