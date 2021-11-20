-- student query
select 
    u.first_name || ' ' || u.last_name as full_name,
    u.contact as student_contact,
    u.age as student_age,
    case
        when u.gender = 1 then 'erkak'
        else 'ayol'
    end as student_gender
from users u
join students s on s.user_id = u.user_id;


-- teacher query
select 
    u.first_name || ' ' || u.last_name as full_name,
    u.contact as teacher_contact,
    u.age as teacher_age,
    case
        when u.gender = 1 then 'erkak'
        else 'ayol'
    end as teacher_gender
from users u
join teachers t on t.user_id = u.user_id;


-- groups query
select 
    g.group_name,
    u.first_name || ' ' || u.last_name as teacher_name,
    u.contact as teacher_contact
from groups g
join teachers t on t.teacher_id = g.teacher_id
join users u on u.user_id = t.user_id;





