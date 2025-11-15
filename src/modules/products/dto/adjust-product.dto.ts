import { IsUUID, IsInt } from 'class-validator';

export class AdjustProductDto {
  @IsUUID()
  productId: string;

  @IsInt()
  adjustment: number; 
}
