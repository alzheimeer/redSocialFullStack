import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-post',
    standalone: false,

  template: `
  <!-- Tarjetas de posts -->
<div class="mat-card" *ngFor="let post of posts">

  <mat-card-header>
    <mat-card-title>{{post.title}}</mat-card-title>
    <mat-card-subtitle>{{post.user}}</mat-card-subtitle>
  </mat-card-header>

  <mat-card-content>
    <p>{{post.content}}</p>
  </mat-card-content>

  <mat-card-actions>
    <button mat-button color="primary">EDITAR</button>
    <button mat-button color="warn">ELIMINAR</button>
  </mat-card-actions>

</div>

<!-- Formulario crear posts -->

<form class="mat-elevation-z6">

  <h3 mat-subheader>Crear Post</h3>

  <mat-form-field>
    <input matInput placeholder="Título">
  </mat-form-field>

  <mat-form-field>
    <textarea matInput placeholder="Escribe algo..." rows="3"></textarea>
  </mat-form-field>

  <button
    mat-raised-button
    color="primary">
    Publicar
  </button>

</form>

    `,
    styleUrls: ['./Post.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  posts: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.cargarPost(10, 1);
  }

  cargarPost(limit: number, page: number): void {
    this.authService.getAllPost(limit, page).subscribe({
      next: (response) => {

        this.posts = response.data.Posts;
        console.log(this.posts);
      },
      error: (error) => console.error(error)
    });
  }

}
