
const TEACHERS = `
select 
    u.first_name || ' ' || u.last_name as teacher_name,
    u.contact as teacher_contact,
    u.age as teacher_age,
    case
        when u.gender = 1 then 'erkak'
        else 'ayol'
    end as teacher_gender,
    t.teacher_id,
    g.group_name
from users u
join teachers t on t.user_id = u.user_id
join groups g on g.teacher_id = t.teacher_id
where g.group_id = any($1)

`

module.exports = {
    TEACHERS
}