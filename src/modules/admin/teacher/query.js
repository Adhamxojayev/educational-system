
const TEACHERS = `
select 
    u.first_name || ' ' || u.last_name as name,
    t.user_id as id
from users u
join teachers t on t.user_id = u.user_id
offset $1 fetch first $2 row only;
`

const COUNT = `
    select 
        count(user_id)
    from teachers;
`

const ADMIN = `
    select 
        u.first_name || ' ' || u.last_name as admin
    from users u
    where user_id = $1    
`

const TEACHER_ADD = `
    insert into users (first_name,last_name,username,password,contact,age,gender,role)
        values ($1, $2, $3, crypt( $4, gen_salt('bf')),  $5, $6, $7, $8)
    returning *    
`

const ADDED_TEACHER = `
    insert into teachers (user_id) values ($1) returning *
`

const DELETE_TEACHER = `
    delete from teachers
    where user_id = $1
    returning *
`


module.exports = {
    TEACHERS,
    ADMIN,
    COUNT,
    TEACHER_ADD,
    ADDED_TEACHER,
    DELETE_TEACHER
}