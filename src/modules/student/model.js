const { fetch, fetchAll } = require("../../lib/postgres.js");
const {STUDENTS, STUDENT_SCORE} = require('./query.js')


const students = async ({groupId, teacherId}) => {
    try {
        let students = await fetchAll(STUDENTS, groupId ? groupId : 0 , teacherId ? teacherId : 0)
        let table = {
            'full name': students.map( student => ({type: 'link', text: student.full_name, link: '/students/' + student.student_id + '/' + student.group_id}) ),
            'age': students.map( student => ({type: 'text', text: student.student_age}) ),
            'contact': students.map( student => ({type: 'link', text: '+' + student.student_contact, link: 'tel: +' + student.student_contact}) ),
            'groups': students.map( student => ({type: 'link', text: 'groups', link: '/groups?studentId=' + student.student_id}) ),
            'total score': students.map( student => ({type: 'text', text: student.student_score}) ),
        }
        if(!groupId) delete table['total score']
        if(teacherId) table['full name'] = students.map( student => ({type: 'text', text: student.full_name, link: '/students/' + student.student_id}) )

        return {
            html: 'public/table.html',
            tableName1: groupId ? 'Group: ' + students[0].group_name : teacherId ? 'Teacher: ' + students[0].teacher_name : '',
            tableName2: 'Students: ' + students.length,
            table
            
        
        }
    }catch (error) {
        console.error(error);
    }
}

const studentScore = async ({ studentId, groupId}) => {
    try {
        let scores = await fetchAll(STUDENT_SCORE, studentId, groupId)
        let table = {
            'score': scores.map( score => ({type: 'text', text: score.score_value}) ),
            'date': scores.map( score => ({type: 'text', text: score.created_at}) ),
            'description': scores.map( score => ({type: 'text', text: score.score_desc}) ),
        }

        return {
            html: 'public/table.html',
            tableName1: 'Student: ' + scores[0].student_name,
            tableName2: 'Group: ' + scores[0].group_name,
            table
        
        }
    }catch (error) {
        console.error(error);
    }
}

module.exports = {
    students,
    studentScore
}