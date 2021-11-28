const { fetch, fetchAll } = require("../../../lib/postgres.js");
const {GROUPS, COUNT, DELETE_GROUP, ADMIN, ADDED_GROUP} = require('./query.js')


const groups = async ({page = 1}, {userId}) => {
    try {
        let admin = await fetch(ADMIN, userId)
        let { count } = await fetch(COUNT)
        let limit = 10
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


const addedGroups = async ({userId}) => {
    try {
        
        let admin = await fetch(ADMIN, userId)

        return {
            html: 'private/admin.html',
            panel: 'edit-groups.html',
            admin
        }

    } catch (error) {
        console.error(error);
    }
}

const addedGroupPOST = async ({groupName, teacherId},{userId}) => {
    try {
        
        let admin = await fetch(ADMIN, userId)

        let data = await fetchAll(ADDED_GROUP, groupName, teacherId)

        return {
            html: 'private/admin.html',
            panel: 'edit-groups.html',
            admin
        }

    } catch (error) {
        console.error(error);
    }

}


module.exports = {
    groups,
    deleted,
    addedGroups,
    addedGroupPOST
} 