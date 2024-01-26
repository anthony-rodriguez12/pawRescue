import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss'],
})
export class DonationsComponent implements OnInit {
  donationsPlans: any[] = [];

  constructor(
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.donationsPlans = [
      {
        img: 'https://cdn.shopify.com/s/files/1/0102/3742/files/Artboard_1_copy_3DD_adc8ebe7-4266-4771-a8ba-04b1b337b041.jpg?v=1626974439',
        price: 10,
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0102/3742/files/Artboard_1_copy_4DD_515d8f6f-7b39-4b47-a81c-0c544d93a5c7.jpg?v=1626974439',
        price: 20,
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0102/3742/files/Artboard_1_copy_5DD_875ffaa2-03cf-4671-8816-0fbe26dffb1e.jpg?v=1626974439',
        price: 30,
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0102/3742/files/Artboard_1_copy_6DD_d52fd1d9-37bd-441b-87ee-cda6b4b933c5.jpg?v=1626974439',
        price: 40,
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0102/3742/files/Artboard_1_copy_7DD_43f6d27f-f993-4dcd-a75d-de9b0496ae1f.jpg?v=1626974439',
        price: 50,
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0102/3742/files/Artboard_1_copy_8DD_2c913fda-6e4f-49de-837c-f2e49e8e8efe.jpg?v=1626974439',
        price: 60,
      },
    ];
  }

  happy() {
    this.snackbarService.sucess(
      '¡Gracias por tu apoyo!',
      'Seguiremos adelante con tu ayuda',
    );
  }
}
