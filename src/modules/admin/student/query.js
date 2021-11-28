
const STUDENTS = `
    select 
        first_name || ' ' || last_name as name,
        user_id as id
    from users
    where role = 3
    offset $1 fetch first $2 row only; 
`
const COUNT = `
    select 
        count(user_id)
    from users
    where role = 3    
`

const ADMIN = `
    select 
        u.first_name || ' ' || u.last_name as admin
    from users u
    where user_id = $1    
`

const DELETE_STUDENT = `
    delete from students
    where user_id = $1
    returning *
`

const STUDENT_ADD = `
    insert into users (first_name,last_name,username,password,contact,age,gender,role)
        values ($1, $2, $3, crypt( $4, gen_salt('bf')),  $5, $6, $7, $8)
    returning *    
`

const ADDED_STUDENT = `
    insert into students (user_id) values ($1) returning *
`

const ADD_GROUP_STUDENT = `
    insert into group_students (group_id, student_id)
     values ($1, $2)
`

const DELETE_USER = `
    delete from users
    where user_id = $1
    returning *
`

module.exports = {
    STUDENTS,
    ADMIN,
    COUNT,
    DELETE_STUDENT,
    STUDENT_ADD,
    ADDED_STUDENT,
    ADD_GROUP_STUDENT,
    DELETE_USER
}