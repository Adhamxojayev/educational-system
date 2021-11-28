const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {TEACHERS, COUNT, ADMIN, TEACHER_ADD, ADDED_TEACHER, DELETE_TEACHER} = require('./query.js')



const teachers = async ({page=1},{userId}) => {
    try {

        let admin = await fetch(ADMIN, userId)

        let { count } = await fetch(COUNT)
        
        let limit = 10
        
        let pages = Math.ceil(count / limit)
        
        let teacher = await fetchAll(TEACHERS,(page - 1) * limit, limit)
        
        return {
            html: 'private/admin.html',
            panel: 'table-teachers.html',
            data: teacher,
            pages: pages,
            page: page,
            admin
        }

    }catch (error) {
        console.error(error);
    }
}

const addedTeacher = async ({userId}) => {
    try {
        
        let admin = await fetch(ADMIN, userId)

        return {
            html: 'private/admin.html',
            panel: 'edit-teacher.html',
            admin
        }

    } catch (error) {
        console.error(error);
    }
}

const addedTeacherPOST = async ({firstName, lastName, username, password, contact, age, gender},{userId}) => {
    try {
        
        let admin = await fetch(ADMIN, userId)

        let users = await fetchAll(TEACHER_ADD, firstName, lastName, username, password, contact, age, gender, 2)


        let data = await fetchAll(ADDED_TEACHER, users[0].user_id)

        return {
            html: 'private/admin.html',
            panel: 'edit-teacher.html',
            admin
        }

    } catch (error) {
        console.error(error);
    }
}

const deleted = async ({ID}) => {
    try {

        let delTeacher = await fetch(DELETE_TEACHER, ID)
        return delTeacher

    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    teachers,
    addedTeacher,
    addedTeacherPOST,
    deleted
}