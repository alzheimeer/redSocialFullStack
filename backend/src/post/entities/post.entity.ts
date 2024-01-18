import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import * as mongoose_delete from 'mongoose-delete';

@ObjectType()
@Schema({
  timestamps: true,
  collection: 'post',
})
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field({ nullable: false })
  @Prop({ required: true })
  content: string;

  @Field({ nullable: true })
  @Prop({ required: false, default: 0 })
  likes: number;

  @Field(() => ID)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Usuario' })
  userId: string;

  @Field(() => Boolean)
  @Prop({ default: true })
  active: boolean;

  @Field()
  @Prop()
  createdAt: Date;

  @Field()
  @Prop()
  updatedAt: Date;

  @Field({ nullable: true })
  @Prop()
  deletedAt: Date;
}

export type PostDocument = Post & Document;
export const PostSchema = SchemaFactory.createForClass(Post);
// Agrega el plugin mongoose-delete al esquema
PostSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
});
// Agregar un campo virtual para id que retorne _id - para manejar la conversión de _id (un objeto en MongoDB) a id (una string en GraphQL).
PostSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Asegurarse de que los campos virtuales sean incluidos en las respuestas
PostSchema.set('toJSON', {
  virtuals: true,
});
