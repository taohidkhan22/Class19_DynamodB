const Router = require('koa-router');
const studentController = require('../controllers/studentController');

const router = new Router();

router.get('/student/:studentId', studentController.getStudentById);
router.get('/students', studentController.getAllStudents);
router.post('/student', studentController.createStudent);
router.patch('/student/:studentId', studentController.updateStudent);
router.put('/student/:studentId', studentController.replaceStudent);
router.delete('/student/:studentId', studentController.deleteStudent);

module.exports = router;
