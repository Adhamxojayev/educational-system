const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {STUDENTS,ADMIN, COUNT, DELETE_STUDENT} = require('./query.js')


const students = async ({page=1}, {userId}) => {
    try {
        let admin = await fetch(ADMIN, userId)

        let { count } = await fetch(COUNT)
        
        let limit = 5
        
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
        return delStudent

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    students,
    deleted
}