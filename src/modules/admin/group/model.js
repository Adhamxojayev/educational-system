const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {GROUPS} = require('./query.js')


const groups = async () => {
    try {

        let groups = await fetchAll(GROUPS)

        return {
            html: 'private/admin.html',
            panel: 'table-groups.html',
            data: groups
        }

    }catch (error) {
        console.error(error);
    }
}

module.exports = {
    groups
} 