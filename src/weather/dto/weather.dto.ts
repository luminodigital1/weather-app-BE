import { IsString, IsNotEmpty } from 'class-validator';

export class WeatherDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  description: string;

  @IsString()
  temperature: string;

  @IsString()
  humidity: string;

  @IsString()
  windSpeed: string;

  @IsString()
  currentTime: string;

  @IsString()
  icon: string;
}
