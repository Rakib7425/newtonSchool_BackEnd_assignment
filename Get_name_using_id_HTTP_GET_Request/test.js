// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const app = require("./app"); // Replace 'app' with the name of your Express app file

// chai.use(chaiHttp);
// const expect = chai.expect;

// describe("API Endpoint Tests", () => {
// 	it("GET /api/v1/names/:id - Checking Status Code for existing id", (done) => {
// 		chai.request(app)
// 			.get("/api/v1/names/1") // Replace '1' with an existing ID
// 			.end((err, res) => {
// 				expect(res).to.have.status(200);
// 				done();
// 			});
// 	});

// 	it("GET /api/v1/names/:id - Checking message for existing id", (done) => {
// 		chai.request(app)
// 			.get("/api/v1/names/1") // Replace '1' with an existing ID
// 			.end((err, res) => {
// 				expect(res.body.message).to.equal("Product Name fetched successfully");
// 				done();
// 			});
// 	});

// 	it("GET /api/v1/names/:id - Checking Status for existing id", (done) => {
// 		chai.request(app)
// 			.get("/api/v1/names/1") // Replace '1' with an existing ID
// 			.end((err, res) => {
// 				expect(res.body.status).to.equal("success");
// 				done();
// 			});
// 	});

// 	it("GET /api/v1/names/:id - Checking data for existing id", (done) => {
// 		chai.request(app)
// 			.get("/api/v1/names/1") // Replace '1' with an existing ID
// 			.end((err, res) => {
// 				expect(res.body.data).to.be.an("object");
// 				expect(res.body.data).to.have.property("id");
// 				expect(res.body.data).to.have.property("name");
// 				done();
// 			});
// 	});

// 	it("GET /api/v1/names/:id - Checking message for non-existing id", (done) => {
// 		chai.request(app)
// 			.get("/api/v1/names/999") // Replace '999' with a non-existing ID
// 			.end((err, res) => {
// 				expect(res.body.message).to.equal("Not found!");
// 				done();
// 			});
// 	});

// 	it("GET /api/v1/names/:id - Checking status code for non-existing id", (done) => {
// 		chai.request(app)
// 			.get("/api/v1/names/999") // Replace '999' with a non-existing ID
// 			.end((err, res) => {
// 				expect(res).to.have.status(404);
// 				done();
// 			});
// 	});

// 	it("GET /api/v1/names/:id - Checking Status for non-existing id", (done) => {
// 		chai.request(app)
// 			.get("/api/v1/names/999") // Replace '999' with a non-existing ID
// 			.end((err, res) => {
// 				expect(res.body.status).to.equal("failure");
// 				done();
// 			});
// 	});
// });
