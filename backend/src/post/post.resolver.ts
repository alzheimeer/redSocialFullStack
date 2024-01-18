import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(returns => [Post])
  async Posts(
    @Args('limit', { type: () => Number, nullable: true }) limit: number,
    @Args('page', { type: () => Number, nullable: true }) page: number,
  ) {
    return this.postService.findAll(limit, page);
  }

  @Query(returns => Post, { nullable: true })
  async PostById(@Args('id', { type: () => String }) id: string) {
    return this.postService.findOneById(id);
  }

  @Mutation(returns => Post)
  async createPost(@Args('createPostDto') createPostDto: CreatePostInput) {
    return this.postService.create(createPostDto, createPostDto.userId);
  }

  @Mutation(returns => Post)
  async updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('updatePostDto') updatePostDto: UpdatePostInput,
  ) {
    return this.postService.update(id, updatePostDto);
  }

  @Mutation(returns => Boolean)
  async deletePost(@Args('id', { type: () => String }) id: string) {
    const result = await this.postService.remove(id);
    if (!result.deleted) {
      throw new Error(result.message || 'Error al eliminar el Post.');
    }
    return result.deleted;
  }

  @Mutation(returns => Post)
  async updatePostActive(
    @Args('id', { type: () => String }) id: string,
    @Args('active', { type: () => Boolean }) active: boolean,
  ) {
    return this.postService.updateActive(id, active);
  }
}
