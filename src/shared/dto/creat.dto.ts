import {
  IsArray,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
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
  finger_print?: string;
}
export class CreateStudentBulkDto {
  @IsArray()
  students: Array<CreateDto>;
}

export class CreateCandidateDto {
  @IsString()
  full_name: string;

  @IsString()
  image: string;

  @IsString()
  level: string;

  @IsEnum(Position)
  position: Position;
}

export class CreateCandidateBulkDto {
  @IsArray()
  candidates: Array<CreateCandidateDto>;
}
