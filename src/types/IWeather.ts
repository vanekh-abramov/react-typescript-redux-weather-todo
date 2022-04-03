export interface IWeather {
  main: IMain
  weather: IWeatherInfo[]
}

interface IMain {
  temp: number | null
  humidity: number | null
}

interface IWeatherInfo {
  icon: string
  main: string
}
