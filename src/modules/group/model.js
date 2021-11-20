const { fetch, fetchAll } = require("../../lib/postgres.js");
const {GROUPS} = require('./query.js')


const groups = async ({studentId}, {groups: userGroups}) => {
    try {
        let groups = await fetchAll(GROUPS, studentId ? studentId : 0, userGroups)
        let table = {
            'group name': groups.map( group => ({type: 'link', text: group.group_name, link: '/students?groupId=' + group.group_id}) ),
            'teacher': groups.map( group => ({type: 'link', text: group.teacher_name, link: '/students?teacherId=' + group.teacher_id}) ),
            'students': groups.map( group => ({type: 'text', text: group.student_count}) ),
        }

        return {
            html: 'public/table.html',
            tableName1: 'Groups: ' + groups.length,
            tableName2: ' ',
            table
        }
        
    }catch (error) {
        console.error(error);
    }
}

module.exports = {
    groups
}