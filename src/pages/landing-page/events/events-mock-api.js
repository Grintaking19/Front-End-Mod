import { createServer } from "miragejs"

createServer({
  routes() {
    this.passthrough('https://api.opencagedata.com/**');
    this.passthrough('https://hebtus.me/api/v1/events/**');

      this.get("/api/v1/events/", (schema, request) => {
        const queryParams = request.queryParams;
        const category = queryParams.category ;
        const location = queryParams.location ;
        
        switch (category){
        case 'all':
        return [
          {
            "eventID": "123",
            "eventName": "Music Event 1",
            "img_url": "https://i.pinimg.com/564x/52/b3/3e/52b33ef6587c406de6efc3d2e5fd2a98.jpg",
            "startTime": "2018-02-21 12:00:00",
            "endTime": "2018-02-22 12:00:00",
            "location": {
              "longitude": 134,
              "latitude": 80
            },
            "locationName": "Cairo University",
            "description": "Agmad event fel donya",
            "category": "charity",
            "online": true,
            "tags": [
              "peace",
              "love",
              "charity"
            ]
          },
          {
            "eventName": "Charity Event 2",
            "img_url": "https://i.pinimg.com/564x/52/b3/3e/52b33ef6587c406de6efc3d2e5fd2a98.jpg",
            "startTime": "2018-02-21 12:00:00",
            "endTime": "2018-02-22 12:00:00",
            "eventid": "123",
            "location": {
              "longitude": 123532,
              "latitude": 123532
            },
            "locationName": "Cairo University",
            "description": "Tany Agmad event fel donya",
            "category": "Food & Drink",
            "online": true,
            "tags": [
              "chill",
              "jazz",
              "music"
            ]
          }
        ]
        case 'online':
          return [
          {
            "eventName": "Online Event 1",
            "img_url": "https://i.pinimg.com/564x/52/b3/3e/52b33ef6587c406de6efc3d2e5fd2a98.jpg",
            "startTime": "2018-02-21 12:00:00",
            "endTime": "2018-02-22 12:00:00",
            "eventid": "123",
            "location": {
              "longitude": 123532,
              "latitude": 123532
            },
            "locationName": "Cairo University",
            "description": "Tany Agmad event fel donya",
            "category": "Food & Drink",
            "online": true,
            "tags": [
              "chill",
              "jazz",
              "music"
            ]
          },
          {
            "eventName": "Online Event 3",
            "img_url": "https://i.pinimg.com/564x/52/b3/3e/52b33ef6587c406de6efc3d2e5fd2a98.jpg",
            "startTime": "2018-02-21 12:00:00",
            "endTime": "2018-02-22 12:00:00",
            "eventid": "123",
            "location": {
              "longitude": 123532,
              "latitude": 123532
            },
            "locationName": "Cairo University",
            "description": "Tany Agmad event fel donya",
            "category": "Food & Drink",
            "online": true,
            "tags": [
              "chill",
              "jazz",
              "music"
            ]
          }
          ]

      }
      });
      
  },
})