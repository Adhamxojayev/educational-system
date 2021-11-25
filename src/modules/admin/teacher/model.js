const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {TEACHERS, COUNT, ADMIN} = require('./query.js')



const teachers = async ({page=1},{userId}) => {
    try {

        let admin = await fetch(ADMIN, userId)

        let { count } = await fetch(COUNT)
        
        let limit = 10
        
        let pages = Math.ceil(count / limit)
        
        let teacher = await fetchAll(TEACHERS,(page - 1) * limit, limit)
        
        return {
            html: 'private/admin.html',
            panel: 'table-groups.html',
            data: teacher,
            pages: pages,
            page: page,
            admin
        }

    }catch (error) {
        console.error(error);
    }
}


module.exports = {
    teachers,
}