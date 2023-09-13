import { Component, OnInit } from '@angular/core';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  televisionData: any[] = [];

  constructor(private GlobalApiService: GlobalApiService) { }

  ngOnInit(): void {
    this.getTelevisionData();
  }

  getTelevisionData() {
    this.GlobalApiService.getTelevisionDataApi(5,30).subscribe(
      (response: any) => {
        console.log('Response: ', response);
        this.televisionData = response.grid_layout;
        console.log("televisionData: ", this.televisionData);
      },
      (error: any) => {
        console.log('Error  : ', error);
      }
    );
  }
}
