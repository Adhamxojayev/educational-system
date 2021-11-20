/*
    1. Admin,
    2. Teacher,
    3. Student
*/

insert into users (first_name,last_name,username,password,contact,gender,age,role) values 
-- role admin
('ahror', 'adhamxojayev', 'ahror', crypt('111133', gen_salt('bf')), '998333732328', 1, 22, 1),
-- role teacher
('bobir', 'aliyev', 'bobir', crypt('0000', gen_salt('bf')), '998998787676', 1, 27, 2),
('halil', 'jumayev', 'halil', crypt('9999', gen_salt('bf')), '998946009889', 1, 24, 2),
('muhammad', 'salimov', 'muhammad', crypt('7777', gen_salt('bf')), '998946009889', 1, 27, 2),
-- role student
('umar', 'najimov', 'umar11', crypt('1111', gen_salt('bf')), '998940909998', 1, 27, 3),
('islom', 'halilov', 'islom', crypt('9090', gen_salt('bf')), '998940909998', 1, 27, 3),
('johongir', 'salimov', 'johon', crypt('898989', gen_salt('bf')), '998935441232', 1, 27, 3),
('anvar', 'khusanov', 'anvar01', crypt('0909', gen_salt('bf')), '998993732328', 1, 27, 3),
('fozil', 'khasanov', 'fozil55', crypt('12345', gen_salt('bf')), '998909884545', 1, 27, 3),
('nodir', 'gulomov', 'nodir11', crypt('98765', gen_salt('bf')), '998987878899', 1, 27, 3),
('muhammadhusayn', 'aloyev', 'husayn', crypt('7777', gen_salt('bf')), '998901042328', 1, 27, 3);

-- teacher added
insert into teachers (user_id) values (2),(3),(4);

-- student added
insert into students (user_id) values (5),(6),(7),(8),(9),(10),(11);

-- group added
insert into groups (group_name, teacher_id) values ('english', 1),('arab-tili', 2),('math', 3);

--group students
insert into group_students (group_id, student_id) values (1,1),(1,2),(1,3),(1,4),(1,5),(2,6),(2,7),(2,3),(3,1),(3,4),(3,5);

-- scores
insert into scores (student_id,group_id,score_desc,score_value) values
(1,1,'yaxshi','4'),
(2,1,'o`rta','3'),
(3,1,'alo','5'),
(4,1,'yaxshi','4'),
(5,1,'yaxshi','4'),
(6,2,'yaxshi','4'),
(7,2,'alo','5'),
(3,2,'alo','5'),
(1,3,'yaxshi','4'),
(4,3,'o`rta','3'),
(5,3,'yaxshi','4');