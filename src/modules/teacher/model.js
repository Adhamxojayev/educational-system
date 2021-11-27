const { fetch, fetchAll } = require("../../lib/postgres.js");
const {TEACHERS} = require('./query.js')



const teachers = async ({groups}) => {
    try {
        let teachers = await fetchAll(TEACHERS, groups)
        let table = {
            'full name': teachers.map( teacher => ({type: 'link', text: teacher.teacher_name, link: '/students?teacherId=' + teacher.teacher_id}) ),
            'age': teachers.map( teacher => ({type: 'text', text: teacher.teacher_age}) ),
            'contact': teachers.map( teacher => ({type: 'link', text: '+' + teacher.teacher_contact, link: 'tel: +' + teacher.teacher_contact}) ),
            'group': teachers.map( teacher => ({type: 'text', text: teacher.group_name, link: 'groups?teacherId=' + teacher.teacher_id}) ),
        }
        
        return {
            html: 'public/table.html',
            tableName1: 'Teachers: ' + teachers.length,
            table
        }
    }catch (error) {
        console.error(error);
    }
}


module.exports = {
    teachers,
}