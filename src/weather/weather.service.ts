import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { WeatherDto } from './dto/weather.dto';
import { formatDateTime } from 'src/helper';

@Injectable()
export class WeatherService {
  private weatherAPIUrl = process.env.WEATHER_API_URL;

  async getWeatherUpdate(city: string): Promise<WeatherDto> {
    try {
      const response = await axios.get(
        `${this.weatherAPIUrl}?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
      );

      const processdata = this.processWeatherData(response.data);
      return processdata;
    } catch (error) {
      return { error: 'Unable to fetch weather data' } as any;
    }
  }

  private processWeatherData(data): WeatherDto {
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      currentTime: formatDateTime(new Date()),
      icon: data.weather[0].icon,
    };
  }
}