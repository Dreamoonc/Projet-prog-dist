const express=require('express')
const router = express.Router()

const {getEmployeurOrDemandeur, getById, deleteById, DesactiverActiverAccount,getUsersByRole}= require('../controllers/compte')

router.route('/getAll').get(getEmployeurOrDemandeur)
router.route('/getUsersByRole/:role').get(getUsersByRole)
router.route('/getOne/:id').get(getById)
router.route('/deleteOne/:id').delete(deleteById)
router.route('/disable-account/:id').put(DesactiverActiverAccount)

module.exports= router