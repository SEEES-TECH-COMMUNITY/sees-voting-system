import {
  IsArray,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
  ArrayNotEmpty,
  ArrayMaxSize,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Position } from '../constants/positions';

export class CreateDto {
  @IsPhoneNumber('NG')
  phone_number: string;

  @IsString()
  mat_number: string;

  @IsString()
  level: string;
}

export class LoginDto {
  @IsString()
  mat_number: string;

  @IsString()
  password: string;

  @IsString()
  finger_print: string;
}

export class loginUserByHashDto {
  @IsString()
  hash: string;
  
  @IsString()
  finger_print: string;
}
export class CreateStudentBulkDto {
  @IsArray({ message: 'Students must be an array' })
  @ArrayNotEmpty({ message: 'At least one student is required' })
  @ArrayMaxSize(1000, {
    message: 'Maximum 100 students can be uploaded at once',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateDto)
  students: Array<CreateDto>;
}

export class CreateCandidateDto {
  @IsString()
  @IsNotEmpty({ message: 'Full name is required' })
  full_name: string;

  @IsString()
  @IsNotEmpty({ message: 'Image URL is required' })
  image: string;

  @IsString()
  @IsNotEmpty({ message: 'Level is required' })
  level: string;

  @IsEnum(Position, {
    message: `Position must be one of: ${Object.values(Position).join(', ')}`,
  })
  position: Position;
}

export class CreateCandidateBulkDto {
  @IsArray({ message: 'Candidates must be an array' })
  @ArrayNotEmpty({ message: 'At least one candidate is required' })
  @ArrayMaxSize(100, {
    message: 'Maximum 100 candidates can be uploaded at once',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateCandidateDto)
  candidates: Array<CreateCandidateDto>;
}
