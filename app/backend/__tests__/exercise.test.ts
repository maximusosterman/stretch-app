import supertest from 'supertest'
import app from '../src/server'

describe("GET /exercieses", () => {

    it("should return code 200 and all the exercises", async() => {

        return supertest(app).get("/exercises")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    duration: expect.any(Number),
                    description: expect.any(String),
                })
            ]))
        })

    })

})

describe("GET /exercieses/:id", () => {

    it("should with valid id return code 200 and the exercise", () => {

        const id = 1

        return supertest(app).get(`/exercises/${id}`)
        .expect(200)
        .expect("Content-Type", /json/)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    duration: expect.any(Number),
                    description: expect.any(String),
                })
            )
            
        })
    })
    
    it("should with invalid id return 404 and error message", () => {
        const id = 99999999

        return supertest(app).get(`/exercises/${id}`)
        .expect(404)
        .expect("Exercise not found!")
    })
})
describe("POST /exercises", () => {

    it("should return 201 and the exercise when valid", () => {


        return supertest(app).post("/exercises").send({
            name: "Exercise name",
            duration: 120,
            description: "This is the description of the exercise"
        })
        .expect(201)
        .expect("Content-Type", /json/)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        duration: expect.any(Number),
                        description: expect.any(String),
                    })
                )
                
            })
    })

    it("should return 400 and message when invalid", () => {

        return supertest(app).post("/exercises").send({
            duration: 60,
            description: "Desc"
        })
        .expect(400)
        .expect("Please send a name, duration and description")

    })

})