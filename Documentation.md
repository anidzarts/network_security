# Documentation

## Online version

The application has been deployed and is accesible in this location:

https://deno-names-for-web.herokuapp.com/



## Creating Database

You need to create a database that matches the data format used in the application.

You should use the following statements yo create the same tables:

```SQ

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(320) NOT NULL,
  password CHAR(60) NOT NULL
);

CREATE UNIQUE INDEX ON users((lower(email)));


create table reports (
  id serial primary key,
  user_id integer references users(id),
  day integer check (day >= 0 and day <=31),
  month integer check (month >= 0 and month <=12),
  year integer check (year >= 2020 and year <=2050),
  sleep_duration decimal,
  sleep_quality integer check (sleep_quality >= 0 and sleep_quality <=5),
  morning_mood integer check (morning_mood >= 0 and morning_mood <=5),
  evening_mood integer check (evening_mood >= 0 and evening_mood <=5),
  sport_duration decimal,
  study_duration decimal,
  eating_quality integer check (eating_quality >= 0 and eating_quality <=5)
);

```

## Running the application

To run the application you should use the following command in the location of the app.js file

```shell
deno run --allow-all --allow-env --unstable app.js
```

After it you can test the aplication opening  the following link in a browser:

**localhost:7777**

## Running the test
```shell
deno test  - - allow- env - - allow-all  - - unstable
```

