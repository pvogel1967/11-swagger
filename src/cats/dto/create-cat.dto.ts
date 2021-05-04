import { ApiExtraModels } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { CreateFoodDto } from './create-food.dto';
import { CreateVendorDto } from './create-vendor.dto';

@ApiExtraModels(CreateFoodDto, CreateVendorDto)
export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  readonly preferredFood: CreateFoodDto;
}
