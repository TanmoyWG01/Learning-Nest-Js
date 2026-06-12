import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../user.types';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true, trim: true })
  fname!: string;

  @Prop({ required: true, trim: true })
  lname!: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({
    required: true,
    default: Role.Student,
    trim: true,
  })
  role!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);