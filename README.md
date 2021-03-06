# ToDO-Backend

This project was generated with Node.js 

## Getting Started
### Documentation
#### [Apidoc](http://apidoc.todo-druvakumar.xyz/)
#### [Eventdoc](http://eventdoc.todo-druvakumar.xyz/)       

### Prerequisites

1. [Node.js](https://nodejs.org/en/download/)
2. [MongoDb](https://www.mongodb.com/download-center?jmp=nav#community)
3. Redis server


### Installing

1. Go to directory you want to clone the project.
```
2. git init
```
```
3. git remote add origin https://github.com/laffingDragons/Todo-Backend.git
```
```
4. git pull origin master
```
```
5. npm install
```
6. Open project.
7. Goto config directory. 
8. Edit appConfig.js.

```
//Config example

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: '<Your Mongodb uri>'
  }
appConfig.apiVersion = '/api/v1';

nodeMailer.email="<Your Email for sending mails>";
nodeMailer.password = "<Your Password>";
```
9. Save changes.
10. Goto root directory.
11. Run MongoDb server.

```
12. node app.js
```
13. Your project should be running on localhost.


## Deployed at

`http://todo-druvakumar.xyz/`

## Api Deployed at

`http://api.todo-druvakumar.xyz`

## Authors

* **Druva Kumar B T** 

## License

This project is licensed under the MIT License 



