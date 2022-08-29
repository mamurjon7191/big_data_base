create table school(
  id bigserial not null primary key,
  name varchar(60) not null
);
create table classRoom(
  id bigserial not null primary key,
  room_number INT not null,
  school_id bigint references school(id) not null
);
create table class(
  id bigserial not null primary key,
  name varchar(60) not null,
  school_id bigint references school(id) not null
);
create table subject(
  id bigserial not null primary key,
  name varchar(60) not null,
  class_id bigint references class(id)
);

create table teacher(
  id bigserial not null primary key,
  fullName varchar(60) not null,
  degree varchar(60) not null,
  experience varchar(60) not null,
  userName varchar(60) not null,
  password varchar(60) not null ChECK(length(password)>=8,
  subject_id bigint references subject(id)
)
create table task(
  id bigserial not null primary key,
  name varchar(60) not null,
  maxMark varchar(60) not null,
  subject_id bigint references subject(id)
)
create table mark(
  id bigserial not null primary key,
  student_id bigint references student(id),
  task_id bigint references task(id)
)
create table parent(
  id bigserial not null primary key,
  userName varchar(60) not null,
  password  varchar(60) not null
)
create table students(
  id bigserial not null primary key,
  fullName varchar(60) not null,
  course  INT not null,
  lesson_table bigint references lessonTable(id)
  class_id bigint references class(id),
  userName varchar(60) not null,
  password  varchar(60) not null
)
create table daily(
  id bigserial not null primary key,
  lessonTable_id bigint references lessonTable(id) not null,
  student_id bigint references students(id)
)

create table lessonTable(
  id bigserial not null primary key,
  lesson_time CHECK(lesson_time IN ('8.30','9.50','11.20')),
  teacher_id bigint references teacher(id),
  classRoom_id bigint classRoom(id) not null
)
CREATE TABLE attendance(
  id BIGSERIAL NOT NULL PRIMARY KEY ,
  lesson_table_id BIGINT REFERENCES lessonTable(id) NOT NULL,
  has BOOLEAN NOT NULL
);

ALTER TABLE attendance ALTER COLUMN has SET DEFAULT TRUE; 


////////////////////////////////






