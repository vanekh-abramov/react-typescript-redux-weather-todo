import { IWeather } from './IWeather'

export interface WeatherState {
  weatherData: IWeather[]
  loading: boolean
  error: null | string
}

export enum WeatherActionTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
}

interface fetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER
}

interface fetchWeatherSuccess {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS
  payload: IWeather
}

interface fetchWeatherError {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR
  payload: string
}

export type WeatherAction =
  | fetchWeatherAction
  | fetchWeatherSuccess
  | fetchWeatherError
