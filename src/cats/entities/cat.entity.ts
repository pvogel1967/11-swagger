import { ApiProperty } from '@nestjs/swagger';
import { Food } from './food.entity';

export class Cat {
  /**
   * The name of the Cat
   * @example Kitty
   */
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;

  @ApiProperty({
    description: 'The Cat\'s preferred food',
    type: Food
  })
  preferredFood: Food;
}
