function getElementWidth(content, padding, borders) {
  if (!content.includes('px') || !padding.includes('px') || !borders.includes('px')) {
    return 'Invalid params';
  }
  const contentWidth = Number(content.replace('px', ''));
  const paddingWidth = padding.replace('px', '') * 2;
  const bordersWidth = borders.replace('px', '') * 2;
  return contentWidth + paddingWidth + bordersWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

