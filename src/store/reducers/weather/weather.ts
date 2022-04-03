import {
  WeatherAction,
  WeatherActionTypes,
  WeatherState,
} from '../../../types/weather'

const initialState: WeatherState = {
  weatherData: [],
  loading: false,
  error: null,
}

export const weatherReducer = (state = initialState, action: WeatherAction) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return { ...state, loading: true }
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      const newWeatherData = {
        main: action.payload.main,
        weather: action.payload.weather,
      }
      return {
        ...state,
        weatherData: [...state.weatherData, newWeatherData],
        loading: false,
      }
    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
