import { IsInt, IsString } from 'class-validator';
import { CreateVendorDto } from './create-vendor.dto';

export class CreateFoodDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly weight: number;

  readonly vendor: CreateVendorDto; 
}
