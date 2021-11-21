
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

module.exports = {
    COUNT,
    GROUPS
}