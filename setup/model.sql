create database score;

create extension pgcrypto;

create table users (
    user_id serial primary key,
    first_name varchar(32) not null,
    last_name varchar(32),
    username varchar(32) not null unique,
    password varchar(60) not null,
    contact varchar(12) not null,
    gender smallint not null,
    age smallint not null,
    created_at timestamptz default current_timestamp,
    status varchar(32) not null default 'active',
    role smallint not null 
);

create table teachers (
    teacher_id serial primary key,
    user_id int not null references users(user_id)
);

create table students (
    student_id serial primary key,
    user_id int not null references users(user_id)
);

create table groups (
    group_id serial primary key,
    group_name varchar(64) not null,
    teacher_id int not null references teachers(teacher_id)
);

create table group_students (
    group_id int not null references groups(group_id) on delete cascade,
    student_id int not null references students(student_id)
);

create table scores (
    score_id serial primary key,
    student_id int not null references students(student_id),
    group_id int not null references groups(group_id) on delete cascade,
    score_desc text,
    created_at timestamptz default current_timestamp,
    score_value int not null
);





