
const VALIDATE = `
    select 
        u.user_id
    from users u
    where u.username = $1 and u.password = crypt($2, u.password) and u.role = $3
`
module.exports = {
    VALIDATE
}