import express from 'express'
import {createUser, deleteUser, getAllUser, getSingleUser, updateUser} from '../controller/user'
const router = express()

router.route('/').get(getAllUser).post(createUser)
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)

export default router

