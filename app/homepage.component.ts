import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
   template: `
    <h4>
      Maharishi University of Management, formerly Maharishi International University, is an American non-profit university located in Fairfield, Iowa.
      <br/>Address: 1000 N 4th St, Fairfield, IA 52557
      <br/>Acceptance rate: 38.1% (2014)
      <br/>Undergraduate tuition and fees: 27,530 USD (2016)
     <br/> Phone: (641) 472-7000
      <br/>Founder: Maharishi Mahesh Yogi
  <br/>Founded: 1971
  <br/>President: John Hagelin
  <br/>Suggest an edit
  <br/>Reviews from the web
 <br/> 4.5/5 Facebook · 153 votes
    </h4>
  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
