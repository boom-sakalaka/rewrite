/*
 * @Author: GZH
 * @Date: 2021-12-17 16:15:37
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-17 16:32:54
 * @FilePath: \mini-vue\src\reactivity\computed.js
 * @Description:
 */
import { isFunction } from '../utils';
import { track, trigger, effect } from './effect';

export function computed(getterOrOptions) {
  let getter, setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
    setter = () => {
      console.warn('Write operation failed: computed value is readonly');
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  return new ComputedRefImpl(getter, setter);
}

class ComputedRefImpl {
  constructor(getter, setter) {
    this._setter = setter;
    this._value = undefined;
    this._dirty = true;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: () => {
        if (!this._dirty) {
          this._dirty = true;
          // console.warn('she');
          trigger(this, 'value');
        }
      },
    });
  }

  get value() {
    if (this._dirty) {
      this._value = this.effect();
      this._dirty = false;
      track(this, 'value');
    }
    return this._value;
  }

  set value(val) {
    this._setter(val);
  }
}
