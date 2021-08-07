import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from "graphql-tag";

@Component({
  selector: 'app-exchangerates',
  templateUrl: './exchangerates.component.html',
  styleUrls: ['./exchangerates.component.scss']
})
export class ExchangeratesComponent implements OnInit {
  rates: any[]=[];
  
  loading = true;
  error: any;
  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rates = result?.data?.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
      
  }

}
