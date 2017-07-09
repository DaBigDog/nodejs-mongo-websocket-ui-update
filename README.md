# nodejs-mongo-websocket-ui-update

The app uses web sockets to update listeners data when a record is saved. This allows all users to have the latest version of the data.

Must have Nodejs and MongoDB installed.

```bash
First, install NPM packages:
>npm install
>npm start

Second, start MongoDB
>mongod --dbpath ~/blah/blah/blah/path/to/your/db

Third, strart the nodejs app
>node app.js
```

Open two browsers listening on port 3000... http://localhost:3000
Update a product in one browser and watch the data in the other browser be updated with the new value.
