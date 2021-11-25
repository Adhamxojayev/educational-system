
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

module.exports = {
    STUDENTS,
    ADMIN,
    COUNT
}