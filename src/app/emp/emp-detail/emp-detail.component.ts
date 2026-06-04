import { Component, Input,OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { Router, RouterLink } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: '[employee-detail]',
    templateUrl: './emp-detail.component.html',
    styleUrl: './emp-detail.component.css',
    standalone: true,
    imports: [RouterLink,CommonModule],
})
export class EmpDetailComponent implements OnInit{
  isAdmin: boolean = false;
  @Input()
  employee: any;
  message: string = '';
  constructor(private empService: EmpService, private router: Router,private tokenStorage:TokenStorageService) {}
  deleteEmployee(id: number) {
    this.empService.delete(id).subscribe({
      next: (data) => {
        this.message = data;
        window.location.reload();
      },
      error: (err) => {},
    });
  }

  ngOnInit(): void {
    if (this.tokenStorage.hasRole('ADMIN')) {
      this.isAdmin = true;
    }

  }
}
