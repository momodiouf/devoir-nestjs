import { Get, Controller, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('/')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async root(): Promise<object> {
    const response = await this.weatherService.ofCity('Warsaw');
    return response;
  }
  // Pour afficher la ville de votre choix ajouter  un /ville à votre url
  @Get(":city")
  async chooseCity(@Param('city')city:string): Promise<object> {
    const response = await this.weatherService.ofCity(city);
    return response;
  }
}
