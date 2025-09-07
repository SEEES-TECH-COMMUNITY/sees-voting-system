import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type FingerPrintDocument = HydratedDocument<FingerPrint>;

@Schema()
export class FingerPrint {
  id: string;

  @Prop({
    type: mongoose.Schema.ObjectId,
    required: true,
  })
  student_id: string;

  @Prop()
  finger_print: string;
}
export const FingerPrintSchema = SchemaFactory.createForClass(FingerPrint);

FingerPrintSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

FingerPrintSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
