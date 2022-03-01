import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
// since both files are in the same folder as the component you can use ./ relative pathing
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
    // onClick (): void {
    //     console.log (`The rating ${this.rating} was clicked!`);
    // } This was the test of the click function.
    onClick (): void {
        this.ratingClicked.emit (`The rating ${this.rating} was clicked!`);
    }
}