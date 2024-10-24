import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Position } from '../constants/positions';

export class CreateDto {
  @IsString()
  full_name: string;
  @IsString()
  mat_number: string;
  @IsString()
  level: string;
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
