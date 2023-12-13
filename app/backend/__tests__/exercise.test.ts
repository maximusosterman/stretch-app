import supertest from 'supertest'
import app from '../src/server'

describe("GET /exercieses | READ", () => {

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

describe("GET /exercieses/:id | READ", () => {

    it("should return code 200 and the exercise when vaild id", () => {

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
    
    it("should return 404 and error message when vaild", () => {
        const id = 99999999

        return supertest(app).get(`/exercises/${id}`)
        .expect(404)
        .expect("Exercise not found!")
    })
})
describe("POST /exercises | CREATE", () => {

    it("should return 201 and the exercise when valid id", () => {


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

describe("PUT /exercises/:id | UPDATE", () => {

    it("should update exercise data return the new updated exercise object", async() => {

        const id = 1 

        const newName = "Updated exercise"
        const newDuration = 60
        const newDescription = "This is an updated exercise description"

        return supertest(app).put(`/exercises/${id}`).send({
            name: newName,
            duration: newDuration,
            description: newDescription
        })
        .expect(200)
        .expect("Content-Type", /json/)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: id,
                        name:newName,
                        duration: newDuration,
                        description: newDescription,
                    })
                )
                
            })

    })

    it("should return 404 and error message when vaild", () => {
        const id = 99999999

        return supertest(app).put(`/exercises/${id}`).send({
            name: "Nonsense",
            duration: 1337,
            description: "This is desciption"
        })
        .expect(404)
        .expect("Exercise not found!")
    })

    it("should return 400 and message when invalid", () => {
        const id = 1

        return supertest(app).put(`/exercises/${id}`).send({
            duration: 60,
            description: "Desc"
        })
        .expect(400)
        .expect("Please send a name, duration and description")

    })

})

// describe("DELETE /exercises/:id | DELETE", () => {

//     it("should return a 204 and delete the exercise", () => {
//         const id = 2

//         return supertest(app).delete(`/exercises/${id}`)
//         .expect(204)
//         .expect("Exercise was deleted")
//     })

//     it("should return 404 and error message when vaild", () => {
//         const id = 99999999

//         return supertest(app).delete(`/exercises/${id}`)
//         .expect(404)
//         .expect("Exercise not found!")
//     })

// })
