
// Define a constant for APP_ID
const APP_ID = "ab26c22e20cdb8221586b4838a35cce6";

// Define a constant for Units
const UNITS = "metric"

// Define the baseURL as a constant
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI {

  constructor(){

    this.apiURL = new URL(WEATHER_API_BASE_URL)
  }
  
  constructURL(locationName){

    this.apiURL.searchParams.append("q", locationName);
    this.apiURL.searchParams.append("appid", APP_ID);
    this.apiURL.searchParams.append("units", UNITS);

    console.log(this.apiURL.toString());
  }

  async invokeURL(){

    const responseObj = await fetch(this.apiURL.toString());
    const responseJSON = await responseObj.json()
    return responseJSON;
  }

   invokeURL2(){

    const responseObj = fetch(this.apiURL.toString()) // 10.30:30
      .then( (response) => { // 10:30:35
        return response.json()
      })
      .then( (responseJSON) => {
        return responseJSON
      })
      .catch( (error) => {

        console.log("Error accessing the API " + error);

      })

    return responseObj;
  }

}

export {WeatherAPI}