import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SidebarModule } from '../../shared/sidemenu/sidebar.module';
import { PostModule } from '../pages/pages.module';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    SidebarModule,
    FormsModule,
    PostModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit {

  menu = true;
  menusm = true;
  menumd = true;
  menulg = true;
  menuxl = true;
  menu2xl = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setMenu(event?.target?.innerWidth);
  }
  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('jwt')) {
      this.router.navigate(['/login']);
    }

    if (typeof window !== 'undefined') {
      this.setMenu(window.innerWidth);
    }
  }




  setMenu(width: number) {
    this.menusm = width > 0 && width < 768;
    this.menumd = width > 768 && width < 1024;
    this.menulg = width > 1024 && width < 1280;
    this.menuxl = width > 1280 && width < 1536;
    this.menu2xl = width >= 1536;
    this.menu = !(this.menumd || this.menusm);
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  cerrarSesion(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
