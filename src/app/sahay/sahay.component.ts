import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-sahay',
  templateUrl: './sahay.component.html',
  styleUrls: ['./sahay.component.css']
})
export class SahayComponent implements OnInit {
  msgs = []
  constructor(private cs : ChatService) { }

  ngOnInit() {
  }
  send(msg): void
  {
    msg = "Sahay : "+msg;
    this.msgs=this.cs.chat(msg);
  }
}
