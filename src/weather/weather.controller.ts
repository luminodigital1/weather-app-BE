import { Controller, Get, Param, Query } from '@nestjs/common';
import { WeatherGateway } from './weather.gateway';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly weatherService: WeatherService,
    private weatherGateway: WeatherGateway,
  ) {}

  @Get('/:city')
  async getWeather(@Param('city') city: string) {
    if (!city) {
      city = 'New York';
    }
    await this.weatherGateway.triggerWeatherUpdates(city);
  }
}
