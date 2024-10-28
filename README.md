
# Weather Application Backend

## Overview

The Weather Application Backend is built using Nest.js and provides a robust server-side solution for a weather application. This backend leverages the OpenWeatherMap API to fetch real-time weather data for specified cities. It uses Socket.IO to facilitate real-time updates, ensuring users receive the latest weather information.

### Key Features:
- **Real-time Weather Updates**: Utilizing Socket.IO to push updates to clients when new weather data is available.
- **City-based Weather Retrieval**: Provides an API endpoint to retrieve weather data for a specified city.
- **Time Zone Information**: Returns the time zone of the selected city along with weather details.

## Getting Started

To run the application locally, follow these steps:

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/en/download/) installed on your machine (version 14.x or later).
- Install [Nest CLI](https://docs.nestjs.com/cli/overview) globally (optional): 
  ```bash
  npm install -g @nestjs/cli
  ```

### Clone the Repository
```bash
git clone https://github.com/luminodigital1/weather-app-BE.git
cd weather-app-BE
```

### Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root of the project and add the following environment variables:
```env
PORT=3000
WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
WEATHER_API_KEY= weather-api-key
```

### Running the Application
To start the application in development mode, run:
```bash
npm run start:dev
```
The server will start and listen on `http://localhost:3000`.

## Deployment URL
https://weather-app-be-2ebf8cd3008b.herokuapp.com/

## Acknowledgements
- [NestJS Documentation](https://docs.nestjs.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
