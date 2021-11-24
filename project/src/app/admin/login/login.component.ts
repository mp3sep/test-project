import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any; modalDetails: any; viewData = []; disabled = true;
  viewDataid: any;
  viewDatatitle : any;
  viewDataauthor: any;
  constructor(private api: ServiceService) { }

  formName = new FormGroup({
    title : new FormControl(''),
    author: new FormControl('')
  })

  ngOnInit(): void {
    this.onload();
  }

  commanForm = new FormGroup({
    title : new FormControl('this.viewData'),
    author: new FormControl('')
  })

  onload() {
    this.api.getData().subscribe(data => {
      this.userData = data;
      console.log(data, "userDAta");
    })
  }

  viewFn(data: any) {
    this.disabled = true;
    this.viewData = data;
    this.modalDetails = "View Details";
    console.log(this.viewData, "view Data");
    this.commanForm.patchValue(data);
  }

  editFn(data: any) {
    this.commanForm.patchValue(data);
    console.log(data.id, "edit form data before open");
    this.viewDataid = data.id;
  }
 
  editnew(data : any){
    var newdata = {
      title: data.title,
      author: data.author
    }
    console.log(this.viewDataid,newdata , "edit form data");

    this.api.updateData(this.viewDataid, newdata).subscribe(data =>{
      console.log(data, "updated data successfully");
    }, error=>{console.log(error, "error message")});
  }
  
  deleteUser(data : any){
    this.api.deleteUser(data).subscribe(data =>{
      console.log(data, "delete successfully");
      this.onload();
    }, error=> {console.log(error, "error message")});
  }

  formSubmit(){
    console.log(this.formName.value);
    this.api.addNewuser(this.formName.value).subscribe(data =>{
      console.log(data, "new user add succussfylly");
      this.onload();
    }, error=>{console.log(error, "add new user message")});
  }


  commanFormfn(){
    console.log(this.commanForm, "Edit formData");
  }
  
}
