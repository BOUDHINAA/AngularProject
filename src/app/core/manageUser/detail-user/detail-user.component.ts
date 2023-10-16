import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  id:any;
  constructor(private activatedroute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    console.log(this.id);
    console.log(this.activatedroute.snapshot.queryParams)
    this.activatedroute.params.subscribe(
      (d)=>{
        console.log(d);
      }
    );
      
  }

}
