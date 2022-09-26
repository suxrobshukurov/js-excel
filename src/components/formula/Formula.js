import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(evt) {
    console.log(this.$root);
    console.log('Formula onInput', evt.target.textContent.trim());
  }
  onClick(evt) {
    console.log(this.$root);
    console.log(evt);
  }
}