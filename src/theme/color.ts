export const colorType = {
  white: 'white',
  black: 'black',
} as const

export const color = {
  [colorType.white]: '#ffffff',
  [colorType.black]: '#000000',
} as const
