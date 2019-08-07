import React from 'react';

/*
  Это задание со звёздочкой, его можно не выполнять.

  Это необычный вид хока, который называется **inheritance inversion HOC**.

  В отличие от обычного, в нём мы используем не композицию,
  а наследование от обёрнутого компонента.

  ВНИМАНИЕ! Настоятельно не рекомендую использовать этот вид HOC
  на практике. Паттерн даётся ТОЛЬКО для ознакомления.

  В этом задании нужно перехватить рендеринг
  и, если самый внешний элемент кнопка - назначить ей
  стиль 'background: red'
*/

export const withRedBackground = WrappedComponent => {
  return class Enhancer extends WrappedComponent {
    render() {
      const elementTree = super.render();
      if (elementTree && elementTree.type === 'button') {
        elementTree.style = 'background: red;';
      }
      return elementTree;
    }
  };
};
