import {ApplicationRef, Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if  (this.appareilStatus  === 'allumé') return 'green';
    else  if (this.appareilStatus === 'éteint') return 'red';
  }
  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
