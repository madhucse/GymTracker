create database CaseStudySBA

use CaseStudySBA


drop table Workout_Category

create table Workout_Category
(
category_id int identity primary key,
category_name varchar(64)
)

insert into Workout_Category values('Jogging')
insert into Workout_Category values('Sprint')
insert into Workout_Category values('Cardio')
insert into Workout_Category values('Slow Walk')
insert into Workout_Category values('Aerobics')
insert into Workout_Category values('Yoga')

select * From Workout_Category

 
create table Workout_Collection
(
workout_title varchar(128),
workout_note varchar(256),
calories_burn_per_min float,
category_id int  foreign key references Workout_Category(category_id),
workout_id int identity primary key
)


drop table Workout_Active

create table Workout_Active
(
workout_active_id int Identity primary key,
workout_id int foreign key references Workout_Collection(workout_id),
start_time time,
starts_date date,
end_time time,
end_date date,
comment varchar(64),
statuss bit
)

select * from Workout_Category

delete from Workout_Category
where category_id=13


select * from Workout_Collection

insert into Workout_Collection values('mgjhfhfh','vasjvdjhasgdj',2,2)

select * from Workout_Category