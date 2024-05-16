const studentHandler = require('../handler/studentHandler');

const getStudentById = async (ctx) => {
  const { studentId } = ctx.params;
  try {
    const data = await studentHandler.getStudentById(studentId);
    ctx.body = data;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: err.message };
  }
};

const getAllStudents = async (ctx) => {
  try {
    const data = await studentHandler.getAllStudents();
    ctx.body = data;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: err.message };
  }
};

const createStudent = async (ctx) => {
  const { name, age, major } = ctx.request.body;
  const student = { name, age, major };
  try {
    await studentHandler.createStudent(student);
    ctx.status = 201;
    ctx.body = { message: 'Student created successfully' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: err.message };
  }
};

const updateStudent = async (ctx) => {
  const { studentId } = ctx.params;
  const { name, age, major } = ctx.request.body;
  const student = { name, age, major };
  try {
    await studentHandler.updateStudent(studentId, student);
    ctx.body = { message: 'Student updated successfully' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: err.message };
  }
};

const replaceStudent = async (ctx) => {
  const { studentId } = ctx.params;
  const { name, age, major } = ctx.request.body;
  const student = { name, age, major };
  try {
    await studentHandler.replaceStudent(studentId, student);
    ctx.body = { message: 'Student replaced successfully' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: err.message };
  }
};

const deleteStudent = async (ctx) => {
  const { studentId } = ctx.params;
  try {
    await studentHandler.deleteStudent(studentId);
    ctx.body = { message: 'Student deleted successfully' };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: err.message };
  }
};

module.exports = {
  getStudentById,
  getAllStudents,
  createStudent,
  updateStudent,
  replaceStudent,
  deleteStudent
};
