import supertest from 'supertest'
import app from '../src/server'
import { response } from 'express'

describe("GET /users | READ", () => {

    it("should return code 200 and all the users", async() => {

        return supertest(app).get("/users")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    fullname: expect.any(String),
                    email: expect.any(String),
                    password: expect.any(String),
                    programsID: expect.any(Array),
                })
            ]))
        })

    })
})

describe("GET /users/:id | READ", () => {

    it("should return code 200 and the users when vaild id", () => {

        const id = 1
        return supertest(app).get(`/users/${id}`)
        .expect(200)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: id,
                    fullname: expect.any(String),
                    email: expect.any(String),
                    password: expect.any(String),
                    programsID: expect.any(Array),
                })
            )
            
        })
    })
    
    it("should return 404 and error message not found", () => {
        const id = 99999999

        return supertest(app).get(`/users/${id}`)
        .expect(404)
        .then(response => {
            expect(response.body).toContain("User not found!")
        })
    })
})
describe("POST /users | CREATE", () => {

    it("should return 201 and the user when valid id", () => {


        return supertest(app).post("/users").send({
            fullname: "Pelle Svensson",
            email: "pelle@gmail.com",
            password: "password is soon hashed",
            programsID: [1, 88, 654]
        })
        .expect(201)
        .expect("Content-Type", /json/)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        fullname: expect.any(String),
                        email: expect.any(String),
                        password: expect.any(String),
                        programsID: expect.any(Array),
                    })
                )
                
            })
    })

    it("should return 400 and message when invalid", () => {

        return supertest(app).post("/users").send({
            duration: 60,
            description: "Desc"
        })
        .expect(400)
        .then(response => {
            expect(response.body).toContain("Please send a full name, email, password, programsID!")
        })

    })

})

describe("PUT /users/:id | UPDATE", () => {

    it("should update users data return the new users object", async() => {

        const id = 1 

        const newFullname = "New name"
        const newEmail = "newemail@example.com"
        const newPassword = "New soon to be hashed password"
        const newProgramsID = [1, 3, 5]

        return supertest(app).put(`/users/${id}`).send({
            fullname: newFullname,
            email: newEmail,
            password: newPassword,
            programsID: newProgramsID
        })
        .expect(200)
        .expect("Content-Type", /json/)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: 1,
                        fullname: expect.any(String),
                        email: expect.any(String),
                        password: expect.any(String),
                        programsID: expect.any(Array)
                    })
                )
                
            })

    })

    it("should return 404 and error message when vaild", () => {
        const id = 99999999

        return supertest(app).put(`/users/${id}`).send({
            name: "Nonsense",
            duration: 1337,
            description: "This is desciption"
        })
        .expect(404)
        .then(response => {
            expect(response.body).toContain("User not found!")
        })
    })

    it("should return 400 and message when invalid", () => {
        const id = 1

        return supertest(app).put(`/users/${id}`).send({
            duration: 60,
            description: "Desc"
        })
        .expect(400)
        .then(response => {
            expect(response.body).toContain("Please send a full name, email, password, programsID!")
        })

    })

})
