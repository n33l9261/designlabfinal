// let chai = require("chai");
// let chaiHttp = require("chai-http");
import chaiHttp from 'chai-http'
import chai from 'chai';
import server from "../server.js"

//Assertion style
chai.should()

chai.use(chaiHttp);
// mentee signin


describe('mentee signin', ()=>{
    //test sigin in with correct values
    describe("singin with correct values", ()=>{
        it("status code should be 200",(done)=>{
              chai.request(server)
            .post("/api/users/mentee/signin-mentee")
            .send({
                email : "shuvrodas@yahoo.com",
                password : "123"
            })
            .end((err,response)=>{
                response.should.have.status(200);
                done()
            })
        })
    })
    //test sigin in with incorrect values
    describe("singin with wrong values", ()=>{
        it("status code should be 401",(done)=>{
              chai.request(server)
            .post("/api/users/mentee/signin-mentee")
            .send({
                email : "random@random.com",
                password : "123"
            })
            .end((err,response)=>{
                response.should.have.status(401);
                done()
            })
        })
    })
})


describe('organize', ()=>{
    //organize with correct date
    describe("Organize with correct values", ()=>{
        it("status code should be 200",(done)=>{
              chai.request(server)
            .post("/api/users/session/organize-session")
            .send({
                sessionName: "Some Session",
                DateInfo: "10 July 2021",
                Price: "800",
                Referral: true,
                Test: true,
                Interview: true,
                multipleOrganizers: false,
                multipleStudents: false,
                Testlink: "suvraneel.com",
                Organizers: "Suvraneel Chatterjee",
                Participants: "22",
            })
            .end((err,response)=>{
                response.should.have.status(200);
                done()
            })
        })
    })
   //organize with wrongdate
   describe("Organize with correct values", ()=>{
    it("status code should be 401",(done)=>{
          chai.request(server)
        .post("/api/users/session/organize-session")
        .send({
            sessionName: "Some Session",
            DateInfo: "05 July 2021",
            Price: "800",
            Referral: true,
            Test: true,
            Interview: true,
            multipleOrganizers: false,
            multipleStudents: false,
            Testlink: "suvraneel.com",
            Organizers: "Suvraneel Chatterjee",
            Participants: "22",
        })
        .end((err,response)=>{
            response.should.have.status(401);
            done()
        })
    })
})
   //get all sessions
   describe("Get all sessions", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/api/users/session/findsession")
     
        .end((err,response)=>{
            response.should.have.status(200);
            done()
        })
    })
})
 //get all sessions
 describe("Get all sessions", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/api/users/session/findsession")
     
        .end((err,response)=>{
            response.should.have.status(200);
            done()
        })
    })
})

describe("Starting session at correct time", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/startsessions?id=60dea4df3eb2b158d88d3c60")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(200);

            done()
        })
    })
})
describe("Starting session at correct time", ()=>{
    it("status code should be 401",(done)=>{
          chai.request(server)
        .get("/startsessions?id=60e851c3c675ab05d4b13f51")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(401);

            done()
        })
    })
})


describe("Joining live session", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/joinsessions?id=60dea4df3eb2b158d88d3c60")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(200);

            done()
        })
    })
})

describe("Joining not yet live session", ()=>{
    it("status code should be 401",(done)=>{
          chai.request(server)
        .get("/joinsessions?id=60e84f41a78fe75044081c71")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(401);

            done()
        })
    })
})

describe("Payment success", ()=>{
    it("status code should be 200",(done)=>{
          chai.request(server)
        .get("/success?id2=60e84f41a78fe75044081c71&id=60ddd5dfc3844f1b25051321")
     
        .end((err,response)=>{
            if(err){
                console.log(err);
            }
            response.should.have.status(200);

            done()
        })
    })
})

//failure of payment is handled by razor pay


})