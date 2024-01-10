import supertest from 'supertest'
import app from '../src/server'

import { Exercise } from '../src/interfaces'

/*
PROGRAM OBJECT
 {
    name,
    desctipton,
    author,
    [exercises]
 }

*/

describe("GET /programs | READ", () => {

    it("should return code 200 and all the programs", async () => {

        return supertest(app).get("/programs")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    exercises: expect.any(Array),
                    description: expect.any(String),
                    userID : expect.any(Number),
                })
            ]))
        })
    })

})

describe("GET /programs/:id | READ", () => {

    it("should return a code 200 and a program", async () => {
        return supertest(app).get("/programs/1")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    exercises: expect.any(Array),
                    description: expect.any(String),
                    userID : expect.any(Number),
                })
            )
        })
    })

})

describe("POST /programs | CREATE", () => {

    it("should return a 201 and the created program", () => {

        const testExercise: Array<Exercise["id"]> = [1, 2, 3]

        return supertest(app).post("/programs").send({
            duration: 120,
            name: "Exercise name",
            exercises: testExercise,
            description: "This is the description of the exercise",
            userID: 1
        })
        .expect(201)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    exercises: expect.any(Array),
                    description: expect.any(String),
                    userID : expect.any(Number),
                })
            )
        })

    })

    it("shoudl return a 401 when not sending valid data",  async() => {
        
        return supertest(app).post("/programs").send({
            notValid: "Object"
        })
        .expect(401)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toContain("Please enter a program name, description, exercises and user")
        })

    })

})

// Implement for loops for testing more failing outcomes

// GET /programs | READ
    // Shoudl return a 200 and all of the program. If not 404

// GET /programs/:id | READ
    //SHould return a 200 and a program

// POST /programs/ | CREATE
    //Should return a 201 and the created program

// PUT /programs/:id | UPDATE
    //Should return a 200 and the updated program

// DELETE /programs/:id | DELETE
    //Shoudl return a 204 