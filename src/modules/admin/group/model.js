const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {GROUPS, COUNT} = require('./query.js')


const groups = async ({page = 1}) => {
    try {
        let { count } = await fetch(COUNT)

        let limit = 1

        let pages = Math.ceil(count / limit)


        let groups = await fetchAll(GROUPS, (page - 1) * limit, limit)

 
        return {
            html: 'private/admin.html',
            panel: 'table-groups.html',
            data: groups,
            pages: pages,
            page: page
        }

    }catch (error) {
        console.error(error);
    }
}

module.exports = {
    groups
} 