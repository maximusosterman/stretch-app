import { Response, Request } from 'express'

import { User } from '../interfaces'

export function getAllUsers(req: Request, res: Response) {
    res.status(200).json(users)
}

export function getUser(req: Request, res: Response) {
    const userID = Number(req.params.id)
    const user = users.find(user => user.id === userID)

    if (!user) return res.status(404).json("User not found!")

    res.status(200).json(user)
}

export function createUser(req: Request, res: Response) {

    const { fullname, email, password, programsID } = req.body

    if (!fullname || !email || !password || !programsID) return res.status(400).json("Please send a full name, email, password, programsID!")


    const newUser = {
        id: users.length + 1,
        fullname: fullname,
        email: email,
        password: password,
        programsID: programsID
    }

    users.push(newUser)

    const newUserFromDB = users.find(user => user.id === newUser.id)

    return res.status(201).json(newUserFromDB)

}

export function updateUser(req: Request, res: Response) {

    const id = Number(req.params.id)
    const { fullname, email, password, programsID } = req.body

    const userFromDB = users.find(user => id === user.id)
    if (!userFromDB) return res.status(404).json("User not found!")

    if (!fullname || !email || !password || !programsID) return res.status(400).json("Please send a full name, email, password, programsID!")

    userFromDB.fullname = fullname
    userFromDB.email = email
    userFromDB.password = password
    userFromDB.programsID = programsID

    const updatedUser = users.find(user => id === user.id)
    res.status(200).json(updatedUser)

}

const users: User[] = [
    {
        id: 1,
        fullname: "Maximus Österman",
        email: "maximus@gamil.com",
        password: "hashed password",
        programsID: [1, 2]
    }
]