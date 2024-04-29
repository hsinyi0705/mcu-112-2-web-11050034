import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute }) id!: number; /**一定要丟東西進來，轉型別 */
  @Input() productName!: string;
  @Input() authors!: string;
  @Input() company!: string;
  @Input({ transform: booleanAttribute }) isShow!: boolean;
  @Input() imgUrl!: string;

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
