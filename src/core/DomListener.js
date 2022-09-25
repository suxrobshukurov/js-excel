import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided dom listener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        // eslint-disable-next-line max-len
        throw new Error(`Method  ${method} is not implemented is ${this.name} component`);
      }
      // Тоже самое что addEventListener
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
  }
}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`;
}
