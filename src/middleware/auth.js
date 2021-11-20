const {verify} = require('../lib/jwt.js')
const {fetch, fetchAll} = require('../lib/postgres.js')

const ROLE = `
    select 
        case
            when role = 1 then 'admin'
            when role = 2 then 'teacher'
            when role = 3 then 'student'
        end as user_role
    from users
    where user_id = $1
`

const GROUP = `
    select 
        gs.group_id
    from group_students gs 
    join students s on s.student_id = gs.student_id
    join users u on u.user_id = s.user_id
    where u.user_id = $1
`
const TEACHER = `
    select 
        g.group_id
    from groups g
    join teachers t on t.teacher_id = g.teacher_id
    join users u on u.user_id = t.user_id
    where u.user_id = $1   
`

const ADMIN =  `
    select 
        group_id
    from groups
`


module.exports = async (req, res, next) => {
    try {
        if(!(req.url == '/' || req.url == '/login') && !req.cookies.token) res.redirect('/')
        if((req.url == '/' || req.url == '/login') && !req.cookies.token) return next()

        let token = req.cookies.token
        let payload = verify(token)
        let userId = payload.user_id
        
        let role = await fetch(ROLE, userId)

        role = role.user_role

        if(role == 'student'){
            let groups = await fetchAll(GROUP, userId)
            groups = groups.map(group => group.group_id)
            req.userInfo = {
                role,
                userId,
                groups,
            }
            return next()
        }else if (role == 'teacher'){
            let groups = await fetchAll(TEACHER, userId)
            groups = groups.map(group => group.group_id)
            req.userInfo = {
                role,
                userId,
                groups, 
            }
            return next()
        }
        else if (role == 'admin'){
            let groups = await fetchAll(ADMIN)
            groups = groups.map(group => group.group_id)
            req.userInfo = {
                role,
                userId,
                groups, 
            }
            return next()
        }
        return next()
    } catch (error) {
        res.render('index.html', {
            links: [],
            input: false,
            html: 'public/error.html',
            data: {
                message: error.message
            }
        })
    }
}