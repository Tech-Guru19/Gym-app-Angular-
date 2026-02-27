import { Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
 protected readonly title = signal('Gym-app');
  counter = signal(0);
  counterInterval: any = null;
  subscription!: Subscription;
  ngOnInit(): void{
    // const source = interval(1000);
    this.counterInterval = setInterval(() => {
      this.counter.update(count=> count + 1)
        if (this.counter() > 97) {
          clearInterval(this.counterInterval)
        }
    }, 100);
    // this.subscription = source.subscribe(() => {
    //   console.log(this.counter());
    // });
  }

  ngOnDestroy(): void {
    
  }
  
  updateCOunter(){
  }

  openVideo() {
  window.open('https://youtu.be/Y-x0efG1seA', '_blank');
}
}
