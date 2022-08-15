import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  countryParam = "";
  numberParam = "";
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.countryParam = data.country;
      this.numberParam = data.number;
    });
  }
}
