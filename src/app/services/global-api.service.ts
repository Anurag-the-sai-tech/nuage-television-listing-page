import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalApiService {
  constructor(private http: HttpClient) { }

  getTelevisionDataApi(pageCount: number, itemsPerPage: number) {
    return this.http.get(
      `https://search.paytm.com/v2/search?page_count=${pageCount}&items_per_page=${itemsPerPage}`,
    );
  }
}
