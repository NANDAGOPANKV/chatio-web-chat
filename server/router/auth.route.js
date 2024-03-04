import express from 'express'

import { signoutUser, signinUser, signupUser } from '../controller/auth.controllers.js'

const router = express.Router()

router.post("/signup", signupUser)

router.post('/signin', signinUser)

router.get("/signou", signoutUser)

export default router
