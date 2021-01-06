
# Deployment 

The app is available at https://network-security-aalto.herokuapp.com

# Database

The database was created in ElephantSQL.
Run the following SQL commands to create the required tables and indices.

```sql
CREATE TABLE readers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(320) NOT NULL,
  hash_token VARCHAR(320) NOT NULL,
  block_list boolean 
);


CREATE TABLE cards(
  id serial primary key,
  name VARCHAR(320) NOT NULL,
  issue_token VARCHAR(320) NOT NULL,
  valid_token VARCHAR(320) NOT NULL,
  block_list boolean 
);
```


## Running the application locally

Start the app locally by running the following command from the root directory of the project

```shell
deno run --allow-all --allow-env --unstable app.js
```

After it you can test the aplication opening the following link in a browser:

**localhost:7777**
