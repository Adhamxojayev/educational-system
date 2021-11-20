
const GROUPS = `
select 
    g.group_id,
    g.group_name,
    u.first_name || ' ' || u.last_name as teacher_name,
    u.contact as teacher_contact,
    t.teacher_id,
    count(gs.student_id) as student_count
    from groups g
join teachers t on t.teacher_id = g.teacher_id
join users u on u.user_id = t.user_id
join group_students gs on gs.group_id = g.group_id
join students s on s.student_id = gs.student_id
where g.group_id = ANY($2) and
    case
        when $1 > 0 then s.student_id = $1
        else true
    end
group by g.group_id,teacher_name,teacher_contact,t.teacher_id;

`
module.exports = {
    GROUPS
}