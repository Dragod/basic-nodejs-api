## Basic nodejs API

1. Run ``npm install`` to add all the nodejs dependecies, also make sure to run ```npm install -g nodemon``` to get an automatic server restart.
2. Open a console and run ``mongod``
3. Use Postman to add a POST request so it will create the Mongo Db.
> To use POST request in Postman, you need to add a Header and set ``Content-type`` to ``Application\json`` also you need to add a body, set it to ``raw`` and select ``JSON Application/json`` from the dropdown. After that add some json into the body, then click SEND button. Example of json in the body:

```json
{
	"make": "Lamborghini",
	"model": "Aventador",
	"color": "Black"
}
```
3. Open a console and run ``nodemon server.js``, if you previously installed nodemon, othewise use ``node server.js``.
4. Open you browser at http://localhost:3000
5. Available API url:
```
http://localhost:3000/api/
http://localhost:3000/api/vehicles
http://localhost:3000/api/vehicle/:vehicle_id
http://localhost:3000/api/vehicle/make/:make
http://localhost:3000/api/vehicle/model/:model
http://localhost:3000/api/vehicle/color/:color
```
6. Install [robo 3T](https://robomongo.org/) to find your database ID's or just use MongoDb command line


