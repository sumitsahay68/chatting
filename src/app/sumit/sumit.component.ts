import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-sumit',
  templateUrl: './sumit.component.html',
  styleUrls: ['./sumit.component.css']
})
export class SumitComponent implements OnInit {
  msgs = []
  constructor(private cs : ChatService) { }

  ngOnInit() {
  }
  send(msg): void
  {
    msg = "Sumit : "+msg;
    this.msgs=this.cs.chat(msg);
  }
}
