const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {GROUPS, COUNT, DELETE_GROUP, ADMIN} = require('./query.js')


const groups = async ({page = 1}, {userId}) => {
    try {
        let admin = await fetch(ADMIN, userId)
        let { count } = await fetch(COUNT)
        let limit = 1
        let pages = Math.ceil(count / limit)
        let groups = await fetchAll(GROUPS, (page - 1) * limit, limit)

        return {
            html: 'private/admin.html',
            panel: 'table-groups.html',
            data: groups,
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
        
        let delGroup = await fetch(DELETE_GROUP, ID)
        return delGroup

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    groups,
    deleted
} 