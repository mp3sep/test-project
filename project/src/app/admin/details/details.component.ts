import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
userUrl: any;
  constructor(
    private router: ActivatedRoute,
    private api : ServiceService
    ) {}

  ngOnInit(): void {
    this.userUrl = this.router.snapshot.params.id;
    this.sendIdGetData();
  }
  sendIdGetData(){
    let data = {
      userid: this.userUrl
    }
    
    this.api.getDataFromId(data.userid).subscribe(data=>{
      console.log(data, "user data");
    },error=>{console.log(error, "error message")})
  }
}
