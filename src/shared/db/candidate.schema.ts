import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Position } from '../constants/positions';
import mongoose, { HydratedDocument } from 'mongoose';
export type CandidateDocument = HydratedDocument<Candidate>;
@Schema()
export class Candidate {
  id: string;

  @Prop()
  full_name: string;

  @Prop({
    enum: Position,
  })
  position: Position;

  @Prop()
  image: string;

  @Prop()
  level: string;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);

CandidateSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

CandidateSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
