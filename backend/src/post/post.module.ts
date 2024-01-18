import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './entities/post.entity';
import { Usuario, UsuarioSchema } from 'src/usuario/entities/usuario.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Usuario.name, schema: UsuarioSchema },
    ]),
  ],
  providers: [PostResolver, PostService],
  exports: [PostService],
})
export class PostModule {}
