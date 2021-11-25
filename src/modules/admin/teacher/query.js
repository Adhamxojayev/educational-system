
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

module.exports = {
    TEACHERS,
    ADMIN,
    COUNT
}