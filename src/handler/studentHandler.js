const dynamodb = require('../models/studentModel');

const getStudentById = async (studentId) => {
  const params = {
    TableName: 'Students',
    KeyConditionExpression: 'studentId = :sid',
    ExpressionAttributeValues: {
      ':sid': studentId
    }
  };

  try {
    const data = await dynamodb.query(params).promise();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllStudents = async () => {
  const params = {
    TableName: 'Students'
  };

  try {
    const data = await dynamodb.scan(params).promise();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createStudent = async (student) => {
  const params = {
    TableName: 'Students',
    Item: student
  };

  try {
    await dynamodb.put(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateStudent = async (studentId, student) => {
  const params = {
    TableName: 'Students',
    Key: { studentId },
    UpdateExpression: 'set #n = :name, #a = :age, #m = :major',
    ExpressionAttributeNames: {
      '#n': 'name',
      '#a': 'age',
      '#m': 'major',
    },
    ExpressionAttributeValues: {
      ':name': student.name,
      ':age': student.age,
      ':major': student.major,
    },
    ReturnValues: 'UPDATED_NEW'
  };

  try {
    await dynamodb.update(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

const replaceStudent = async (studentId, student) => {
  const params = {
    TableName: 'Students',
    Item: {
      studentId,
      ...student
    }
  };

  try {
    await dynamodb.put(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteStudent = async (studentId) => {
  const params = {
    TableName: 'Students',
    Key: { studentId }
  };

  try {
    await dynamodb.delete(params).promise();
  } catch (err) {
    throw new Error(err.message);
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
