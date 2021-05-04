import { IsInt, IsString } from 'class-validator';

export class CreateVendorDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly address: string;
}
