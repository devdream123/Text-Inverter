import { Component , OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public invertedText:String;
    doInvertion(textToInvert:String){
    if(textToInvert.match("[^\x00-\x7F]+")){
            alert("Non Latin alphabet symbol is not allow! ");
    }
        this.invertedText = textToInvert.split("").reverse().join("").split(" ").reverse().join(" ").toLowerCase(); 
    }
}   



