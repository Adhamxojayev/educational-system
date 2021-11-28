const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {STUDENTS,ADMIN, COUNT, DELETE_STUDENT, STUDENT_ADD, ADDED_STUDENT, ADD_GROUP_STUDENT, DELETE_USER} = require('./query.js')


const students = async ({page=1}, {userId}) => {
    try {
        let admin = await fetch(ADMIN, userId)

        let { count } = await fetch(COUNT)
        let limit = 10
        let pages = Math.ceil(count / limit)
        
        let student = await fetchAll(STUDENTS,(page - 1) * limit, limit)

        return {
            html: 'private/admin.html',
            panel: 'table-students.html',
            data: student,
            pages: pages,
            page: page,
            admin
        }

    }catch (error) {
        console.error(error);
    }
}

const deleted = async ({ID}) => {
    try {
        let delStudent = await fetch(DELETE_STUDENT, ID)
        let delusers = await fetch(DELETE_USER, ID)

        return delStudent

    } catch (error) {
        console.error(error);
    }
}

const addedStudent = async ({userId}) => {
    try {
        
        let admin = await fetch(ADMIN, userId)

        return {
            html: 'private/admin.html',
            panel: 'edit-student.html',
            admin
        }

    } catch (error) {
        console.error(error);
    }
}

const addedStudentPOST = async ({firstName, lastName, username, password, contact, age, gender, groupId},{userId}) => {
    try {
        
        let admin = await fetch(ADMIN, userId)

        let users = await fetchAll(STUDENT_ADD, firstName, lastName, username, password, contact, age, gender, 3)

        let data = await fetchAll(ADDED_STUDENT, users[0].user_id)

        await fetchAll(ADD_GROUP_STUDENT, groupId, data[0].student_id)

        return {
            html: 'private/admin.html',
            panel: 'edit-teacher.html',
            admin
        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    students,
    deleted,
    addedStudent,
    addedStudentPOST
}