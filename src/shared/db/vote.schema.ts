import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Student } from './students.schema';
import { Candidate } from './candidate.schema';

export type VoteDocument = HydratedDocument<Vote>;
@Schema()
export class Vote {
  id: string;

  @Prop({
    required: true,
  })
  student_id: string;

  @Prop({
    required: true,
  })
  candidate_id: string;

  @Prop({
    type: Date,
    required: true,
    default: Date.now,
  })
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  deleted_at: Date;

  students: Array<Student>;

  candidates: Array<Candidate>;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);

VoteSchema.virtual('students', {
  ref: 'Student',
  localField: 'student_id',
  foreignField: '_id',
});

VoteSchema.virtual('candidates', {
  ref: 'Candidate',
  localField: 'candidate_id',
  foreignField: '_id',
});

VoteSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

VoteSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
