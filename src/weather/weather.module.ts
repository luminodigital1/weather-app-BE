import { Module } from '@nestjs/common';

import { WeatherGateway } from './weather.gateway';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';

@Module({
  providers: [WeatherGateway, WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
