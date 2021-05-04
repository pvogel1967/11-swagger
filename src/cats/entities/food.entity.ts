import { ApiProperty } from '@nestjs/swagger';
import { Vendor } from './vendor.entity';

export class Food {
  /**
   * The name of the Cat
   * @example Kitty
   */
  name: string;

  @ApiProperty({ example: 30, description: 'The weight of the food for one meal in grams' })
  weight: number;

  @ApiProperty({
    description: 'Vendor who supplies the food',
  })
  vendor: Vendor;
}