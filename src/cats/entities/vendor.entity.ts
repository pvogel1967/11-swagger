import { ApiProperty } from '@nestjs/swagger';

export class Vendor {
  /**
   * The name of the Cat
   * @example Kitty
   */
  name: string;

  @ApiProperty({ example: "1600 Pennsylvania Ave, N.W.\n Washington, DC 20500", description: "Address of the vendor"})
  address: string;

}