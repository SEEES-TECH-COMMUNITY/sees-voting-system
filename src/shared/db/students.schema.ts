import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  id: string;

  @Prop({ select: false })
  password: string;

  @Prop({
    unique: true,
  })
  mat_number: string;

  @Prop()
  level: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);

StudentSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

StudentSchema.virtual('media', {
  ref: 'FingerPrint',
  localField: '_id',
  foreignField: 'student_id',
});

StudentSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
