const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {STUDENTS,ADMIN,COUNT} = require('./query.js')


const students = async ({page=1}, {userId}) => {
    try {
        let admin = await fetch(ADMIN, userId)

        let { count } = await fetch(COUNT)
        
        let limit = 10
        
        let pages = Math.ceil(count / limit)
        
        let student = await fetchAll(STUDENTS,(page - 1) * limit, limit)
        
        return {
            html: 'private/admin.html',
            panel: 'table-groups.html',
            data: student,
            pages: pages,
            page: page,
            admin
        }

    }catch (error) {
        console.error(error);
    }
}

module.exports = {
    students,
}