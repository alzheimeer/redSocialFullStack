import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './entities/post.entity';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private PostModel: Model<PostDocument>,
    @InjectModel(Usuario.name) private UsuarioModel: Model<UsuarioDocument>,
  ) {}

  async create(createPostDto: CreatePostInput, userId: string): Promise<Post> {
    const newPost = new this.PostModel(createPostDto);
    await newPost.save();

    const user = await this.UsuarioModel.findById(userId);
    if (!user) {
      throw new NotFoundException(`Usuario con ID "${userId}" no encontrado`);
    }
    user.posts.push(newPost._id);
    await user.save();

    return newPost;
  }

  async findAll(limit: number = 10, page: number = 1): Promise<Post[]> {
    return this.PostModel.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
  }

  async findOneById(id: string): Promise<Post> {
    const Post = await this.PostModel.findById(id).exec();
    if (!Post) {
      throw new NotFoundException(`Post con ID "${id}" no encontrado`);
    }
    return Post;
  }

  async findManyByIds(postIds: string[]): Promise<Post[]> {
    return this.PostModel.find({
      _id: { $in: postIds },
    });
  }

  async update(id: string, updatePostDto: UpdatePostInput): Promise<Post> {
    const updatedPost = await this.PostModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    ).exec();
    if (!updatedPost) {
      throw new NotFoundException(`Post con ID "${id}" no encontrado`);
    }
    return updatedPost;
  }

  async remove(id: string): Promise<{ deleted: boolean; message?: string }> {
    const result = await (this.PostModel as any).delete({ _id: id });
    if (!result) {
      return { deleted: false, message: 'Post no encontrado' };
    }
    return { deleted: true };
  }

  async updateActive(id: string, active: boolean): Promise<Post> {
    const Post = await this.PostModel.findById(id).exec();
    if (!Post) {
      throw new NotFoundException('Post no encontrado');
    }
    Post.active = active;
    return Post.save();
  }
}
