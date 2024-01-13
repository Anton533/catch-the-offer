export function ele(tagName, ...classNames) {
  const ele = document.createElement(tagName);
  ele.classList.add(...classNames);
  return ele;
}

export function createEle(tagName, props) {
  const ele = document.createElement(tagName);
  Object.entries(props).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });
  return ele;
}
