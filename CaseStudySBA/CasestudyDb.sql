create database CaseStudySBA

use CaseStudySBA


drop table Workout_Category

create table Workout_Category
(
category_id int identity primary key,
category_name varchar(64)
)
 
create table Workout_Collection
(
workout_title varchar(128),
workout_note varchar(256),
calories_burn_per_min float,
category_id int  foreign key references Workout_Category(category_id),
workout_id int identity primary key
)


create table Workout_Active
(
workout_id int foreign key references Workout_Collection(workout_id),
start_time time,
starts_date date,
end_time time,
end_date date,
comment varchar(64),
statuss bit
)
