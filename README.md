# Weather-App : Know The Weather
This is a weather app,a web application which displays the current weather details and five-day forecast where the user enter the city they want to know the weather.The user can also know the current weather and the 5 day forecast of their current location by clicking the Use My Location button. 
Used the openweather API to get the current global weather details.

# Components of the App
The components of the application can be found in the components folder which is in src folder. The stylings for the components can be found in the styles folder which is also present in the src folder.
# Header 
This displays the title of the app which is Know The Weather, the weather icon which is the logo of the app, the name of the developer and the i button icon which shows the information about the company.
Files for this : Header.js, Header.css
# Search
This allows the user to enter the city by clicking search button or the user can click on the Use My Location button to know their current location's weather data.
Files for this : Search.js,Search.css
# Currentweather
This displays the current weather details which is fetched from the openweather API along with the icons.
Files for this : Currentweather.js,Currentweather.css
# FiveDayForecast
This displays the five day weather forecast which is fetched from the openweather API.
Files for this: FiveDayForecast.js,FiveDayForecast.css
# API
This fetches the weather and forecast data from openweatherAPI with the help of API key. 
Files for this: API.js
# App
This is the main component present in src folder which combines all the other components.
Files for this : App.js, App.css

# Steps to start and run the application
-> This is a React based application where the following command is used to create the react app :
npx create-react-app weather-app # Creates a react app in the directory named weather-app
cd weather-app # To navigate to the weather-app directory where the application is created and all the files related to it are present.

-> To install all the necessary packages and dependencies which are   present in packagr.json, run the following command:
npm install

-> Insert your openweather API key in the API_key variable in the API.js file.

-> Use the following command to run the application:
npm start

-> Make sure that you have installed and updated the latest versions of Node.js and npm.

