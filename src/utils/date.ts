export const date = () =>
  new Date().toString().split(' ').splice(1, 4).join(' ')
