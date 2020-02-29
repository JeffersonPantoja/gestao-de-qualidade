import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from '../../service/progressbar/progressbar.service';


@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor(public progressbarService: ProgressbarService) { }

  ngOnInit() {
  }

}
