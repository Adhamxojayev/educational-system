
const GROUPS = `
    select 
        group_id,
        group_name
    from groups  
    offset $1 fetch first $2 row only;
`

const COUNT = `
    select 
        count(group_id)
    from groups;
`

const DELETE_GROUP = `
    delete from groups
    where group_id = $1
    returning *
`

const ADMIN = `
    select 
        u.first_name || ' ' || u.last_name as admin
    from users u
    where user_id = $1    
`

module.exports = {
    COUNT,
    GROUPS,
    DELETE_GROUP,
    ADMIN
}