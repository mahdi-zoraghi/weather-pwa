import axios from "axios"

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "5b1fdf87aea085157084751c8e5a830d"

export const fetchWeather = async query => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  })

  return data
}
