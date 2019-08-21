import { Component } from '@angular/core';
import { BinaryOperator, Parser } from '../../node_modules/@angular/compiler';
import { parse } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Calculator by AMS';
  past_number:string="";
  actual_number:string="0";
  can_get_symbols:boolean=true;
  have_cero:boolean=true;
  number1:string[];
  number2:number=0;
  symbol:string;
  contains_symbols:boolean;
  last_number:string;

  //Here we code
  cero_validation(){
    if (this.actual_number=="0" && !this.actual_number.endsWith(".")){
      this.actual_number="";
    }
    if(this.past_number.endsWith("=")){
      this.actual_number="";
      this.past_number="";
    }
  }

  cero_validation_symbols(){
    if (this.actual_number.charAt(0)=="0" || this.past_number.endsWith("÷") || this.past_number.endsWith("x") || this.past_number.endsWith("%") || this.past_number.endsWith("+") || this.past_number.endsWith("-") || this.past_number.endsWith("=")){
      this.actual_number="0";
      this.can_get_symbols=true;
    }
    else if (this.actual_number.endsWith(".")){
      this.can_get_symbols=false;
    }
  }

  have_entered_ecuations(){
    if(this.past_number.endsWith("÷") || this.past_number.endsWith("*") || this.past_number.endsWith("%") || this.past_number.endsWith("+") || this.past_number.endsWith("-")){
        this.contains_symbols=true;
    }
    else{
      this.contains_symbols=false;
    }
  }


  clean(){
    this.past_number='';
    this.actual_number='0';
  }
  alternative(){
      this.actual_number=eval(this.actual_number+"*-"+1)+"";
  }
  percentage(){
    //a%b
    //(b/100)*a
    this.have_entered_ecuations();
    //this.cero_validation_symbols();
    if(this.contains_symbols){
      this.past_number=this.past_number+this.actual_number;
      this.number1=this.past_number.split("%");
      this.past_number=eval("("+this.number1[1]+"/100)"+"*"+this.number1[0])+"%";
      this.actual_number="0";
      this.contains_symbols=false;
    }
    else{
      this.past_number=this.actual_number+"%";
      this.actual_number="0";
    }


  }

  module(){
    this.have_entered_ecuations();

    if(this.contains_symbols){
      this.past_number=this.past_number+this.actual_number;
      this.past_number=eval(this.past_number)+"MOD";
      this.actual_number="0";
      this.contains_symbols=false;
    }
    else{
      this.past_number=this.actual_number+"MOD";
      this.actual_number="0";
    } 
  }

  divisor(){
    this.have_entered_ecuations();
    //this.cero_validation_symbols();
    if(this.contains_symbols){
      this.past_number=this.past_number+this.actual_number;
      this.past_number=eval(this.past_number)+"/";
      this.actual_number="0";
      this.contains_symbols=false;
    }
    else{
      this.past_number=this.actual_number+"/";
      this.actual_number="0";
    }
  }
  times(){
    this.have_entered_ecuations();
    //this.cero_validation_symbols();
    if(this.contains_symbols){
      this.past_number=this.past_number+this.actual_number;
      this.past_number=eval(this.past_number)+"*";
      this.actual_number="0";
      this.contains_symbols=false;
    }
    else{
      this.past_number=this.actual_number+"*";
      this.actual_number="0";
    }
  }
  minus(){
    this.have_entered_ecuations();
    //this.cero_validation_symbols();
    if(this.contains_symbols){
      this.past_number=this.past_number+this.actual_number;
      this.past_number=eval(this.past_number)+"-";
      this.actual_number="0";
      this.contains_symbols=false;
    }
    else{
      this.past_number=this.actual_number+"-";
      this.actual_number="0";
    }
  }
  plus(){
    this.have_entered_ecuations();
    //this.cero_validation_symbols();
    if(this.contains_symbols){
      this.past_number=this.past_number+this.actual_number;
      this.past_number=eval(this.past_number)+"+";
      this.actual_number="0";
      this.contains_symbols=false;
    }
    else{
      this.past_number=this.actual_number+"+";
      this.actual_number="0";
    }
  }

  equals(){
    if (parseInt(this.actual_number)==0 && this.past_number.endsWith("/")) {
      this.actual_number="Operación Restringida";
    }
    else{
      {
        if(this.past_number.search("=")==-1 && !this.past_number.endsWith("%") && !this.past_number.endsWith("MOD")){
          this.past_number=this.past_number+this.actual_number;
          this.actual_number=eval(this.past_number);
          this.past_number=this.past_number+"=";
        }
        if (this.past_number.endsWith("%")){
          this.number1=this.past_number.split("%");
          this.past_number=this.past_number+this.actual_number;
          this.actual_number=eval(this.actual_number+"/"+100+"*"+this.number1[0]);
          this.past_number=this.past_number+"=";
        }
        if (this.past_number.endsWith("MOD")){
          this.number1=this.past_number.split("MOD");
          this.past_number=this.past_number+this.actual_number;
          this.actual_number=eval(this.number1[0]+"%"+this.actual_number);
          this.past_number=this.past_number+"=";
          //alert(parseInt(this.number1[0])%2);
        }
      }
    }
  }








  nine(){
    this.cero_validation();
    this.actual_number=this.actual_number+"9";
  }
  eight(){
    this.cero_validation();
    this.actual_number=this.actual_number+"8";
  }
  seven(){
    this.cero_validation();
    this.actual_number=this.actual_number+"7";
  }
  six(){
    this.cero_validation();
    this.actual_number=this.actual_number+"6";
  }
  five(){
    this.cero_validation();
    this.actual_number=this.actual_number+"5";
  }
  four(){
    this.cero_validation();
    this.actual_number=this.actual_number+"4";
  }
  three(){
    this.cero_validation();
    this.actual_number=this.actual_number+"3";
  }
  two(){
    this.cero_validation();
    this.actual_number=this.actual_number+"2";
  }
  one(){
    this.cero_validation();
    this.actual_number=this.actual_number+"1";
  }
  cero(){
    this.cero_validation();
    this.actual_number=this.actual_number+"0";
  }
  dot(){
    this.actual_number=this.actual_number+"."+"";
  }




}



