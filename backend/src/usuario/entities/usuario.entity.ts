import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import * as mongoose_delete from 'mongoose-delete';

@ObjectType()
@Schema({
  timestamps: true,
  collection: 'usuario',
})
export class Usuario {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  @Field()
  @Prop({ required: true })
  fullname: string;

  @Field()
  @Prop({ required: true, default: 0 })
  age: number;

  @Prop({ required: true })
  password: string;

  @Field(() => [ID], { nullable: true })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Post' })
  posts: string[];

  @Field(() => Boolean)
  @Prop({ default: true })
  active: boolean;

  @Field()
  @Prop()
  createdAt: Date;

  @Field()
  @Prop()
  updatedAt: Date;

  @Field(() => Boolean)
  @Prop({ default: false })
  deleted: boolean;

  @Field(() => Date, { nullable: true })
  @Prop({ type: Date, default: null })
  deletedAt: Date | null;
}

export type UsuarioDocument = Usuario & Document;

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

// Agrega el plugin mongoose-delete al esquema
UsuarioSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
});

// Se agrega un campo virtual para id que retorne _id - para manejar la conversión de _id (un objeto en MongoDB) a id (una string en GraphQL).
UsuarioSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Nos Aseguramos de que los campos virtuales sean incluidos en las respuestas
UsuarioSchema.set('toJSON', {
  virtuals: true,
});
