import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-fill-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fill-dots.component.html',
  styleUrl: './fill-dots.component.css'
})
export class FillDotsComponent implements OnInit, OnDestroy {
  incValue = 1;
  dots = Array.from(Array(160).keys());
  colors = [
    'color1', 'color2', 'color3', 'color4',
    'color5', 'color6', 'color7', 'color8',
    'color9', 'color10'
  ];
  counter = 5;
  isGameStarted = false;
  isGameEnded = false;
  randomColorIndex = 0;
  cleanCount = 0;
  dirtyCount = 0;
  isWon = false;

  @ViewChildren('dotRefs') dotRefs: QueryList<any> | undefined;

  changeStyle(dot: any) {
    this.randomColorIndex = Math.floor(Math.random() * 10)
    if (!this.isGameEnded) {
      dot.classList.add(this.colors[this.randomColorIndex])
      if (dot.innerText == '') {
        dot.innerText = this.dirtyCount + 1
      }
      this.incValue = this.incValue + 1;
      this.checkGameStatus();
    }
  }

  checkGameStatus() {
    this.cleanCount = 0;
    this.dirtyCount = 0;
    this.dotRefs?.forEach((dot) => {
      if (dot.nativeElement.classList.length > 1) {
        this.dirtyCount++;
      } else {
        this.cleanCount++;
      }
    })
    if (!this.isGameStarted) {
      this.startTimer()
    }
    if (this.dirtyCount == 160) {
      this.isWon = true;
      this.isGameEnded = true;
    }
  }

  clearInterval() {
    this.counter = 5;
  }

  startTimer() {
    this.isGameStarted = true;
    setInterval(() => {
      if (this.counter > 1) {
        this.counter--;
      } else {
        if(!this.isGameEnded){
          console.log(this.dotRefs, 'dotRefs')
          this.dotRefs?.map((dot) => {
            if(dot.nativeElement.classList.length == 1){
              return dot.nativeElement.classList.add('blink')
            }
            return dot
          })
        }
        this.isGameEnded = true;
      }
    }, 1000);
  }

  isNotFillTimer() {
    setInterval(() => {

    }, 1000);
  }

  resetGame() {
    this.clearInterval()
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.clearInterval()
  }

}
