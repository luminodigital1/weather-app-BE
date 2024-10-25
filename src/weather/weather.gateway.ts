import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WeatherService } from './weather.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WeatherGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private interval: NodeJS.Timeout;

  constructor(private weatherService: WeatherService) {}

  async handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
    this.startWeatherUpdates(client);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    clearInterval(this.interval);
  }

  async startWeatherUpdates(client: Socket) {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(async () => {
      const data = await this.weatherService.getWeatherUpdate('New York');
      client.emit('weatherUpdate', data);
    }, 5000);
  }

  async triggerWeatherUpdates(city: string) {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(async () => {
      const weatherData = await this.weatherService.getWeatherUpdate(city);
      this.server.emit('weatherUpdate', weatherData);
    }, 5000);
  }
}
