create table sim3users (int serial primary key, username varchar(50), password varchar(50), pic text)

insert into sim3users (username, password, pic)
values ('CamelSpit', 'grass-cheese', 'asd;kasdf;lksajdflkasfd')

create table messages ("id" serial primary key, "user" integer, "message" text)

insert into messages (user, message)
values (1, "this is for you")

insert into messages (user, message)
values (1, "this is not for you")

insert into messages (user, message)
values (1, "theres a dead animal head behind me.")