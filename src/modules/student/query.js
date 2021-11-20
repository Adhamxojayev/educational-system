
const STUDENTS = `
select 
    u.first_name || ' ' || u.last_name as full_name,
    u.contact as student_contact,
    u.age as student_age,
    s.student_id,
    g.group_id,
    g.group_name,
    case
        when $1 > 0 then (select sum(score_value) from scores where student_id = s.student_id and group_id = $1)
        else null
    end as student_score,
    case
        when u.gender = 1 then 'erkak'
        else 'ayol'
    end as student_gender,
        (
            select  u.first_name || ' ' || u.last_name as teacher_name 
                from users u 
            join teachers t on t.user_id = u.user_id and t.teacher_id = $2
        ) as teacher_name
from users u
join students s on s.user_id = u.user_id
join group_students gs on gs.student_id = s.student_id
join groups g on g.group_id = gs.group_id
join teachers t on t.teacher_id = g.teacher_id
where case
        when $1 > 0 then g.group_id = $1
        else true
      end and
      case
        when $2 > 0 then g.teacher_id = $2
        else true
      end
order by  student_score desc     
`

const STUDENT_SCORE = `
    select 
        s.score_id,
        s.score_desc,
        s.score_value,
        to_char(s.created_at, 'yyyy-MM-dd HH24:MI:SS') as created_at,
        (
            select  
                u.first_name || ' ' || u.last_name as student_name 
            from students st
            join users u on u.user_id = st.user_id and st.student_id = $1
  
        ) as student_name,
        g.group_name
    from scores s
    join groups g on g.group_id = $2
    where s.student_id = $1 and s.group_id = $2    
`

module.exports = {
    STUDENTS,
    STUDENT_SCORE
}