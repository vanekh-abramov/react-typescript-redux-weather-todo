import axios from "axios";
import { Dispatch } from "react";
import { WeatherAction, WeatherActionTypes } from "./../../../types/weather";
import { WEATHER_API } from "./../../../constants/externalLinks";
import { WEATHER_FETCHING_WARNING } from "./../../../constants/warnings";

export const fetchWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      const fetchAction: WeatherAction = {
        type: WeatherActionTypes.FETCH_WEATHER,
      };
      dispatch(fetchAction);
      const { data } = await axios.get(WEATHER_API, {
        params: {
          lat: 35,
          lon: 139,
          q: "Minsk",
          appid: process.env.REACT_APP_WEATHER_API_KEY,
        },
      });
      const fetchSuccessAction: WeatherAction = {
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: data,
      };
      dispatch(fetchSuccessAction);
    } catch (err) {
      const fetchErrorAction: WeatherAction = {
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: WEATHER_FETCHING_WARNING,
      };
      dispatch(fetchErrorAction);
    }
  };
};
