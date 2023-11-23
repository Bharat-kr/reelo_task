# Question Paper Generator

### Reelo Task

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://img.shields.io/badge/documentation-yes-brightgreen.svg)

### Prerequisites

- **Node.js:** Node.js must be installed. You can download it from [Node.js website](https://nodejs.org/).

## Steps To Run

```
$ git clone https://github.com/Bharat-kr/reelo_task.git
$ cd reelo_task
$ npm install
```

- Add a .env.development file or you can rename .env.example to .env.developement

```
$ npm run dev
```

> Server is now running

### Testing

You can use any api testing libray for instance , I used postman for Testing.

- To check if the server is running properly simple go to the call a get request to `http://localhost:8000/` or any other port number whatever you are using , you should see this `Server up and running`.

- Now to test the Paper generate you can call a post request to the route `http://localhost:8000/api/generate` route with following body format

```
url : http://localhost:8000/api/generate
body : {
           "marks":100, // Type Number
           "difficulty":{
               "easy":20, // Type Number
               "medium":50, // Type Number
               "hard":30 // Type Number
           }
       }

response : {
              "msg": "Paper Generated Successfully",
              "data": {
                        "metadata": {
                              "total": 100,
                              "easy": 20,
                              "medium": 50,
                              "hard": 30
                          },
                        "questions":[]
                      }
           }
```

# Tech Used

- ExpressJs
- Nodemon
- Cors
- Dotenv
- Winston

# Author

👤 **Bharat Kumar**

- Github: [@Bharat-kr](https://github.com/Bharat-kr)
- LinkedIn: [@BharatKumar](https://www.linkedin.com/in/bharat-kumar-15bk/)
