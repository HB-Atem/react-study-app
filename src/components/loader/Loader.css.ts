import { color, colorType } from '@/theme'
import { keyframes, style } from '@vanilla-extract/css'

export const overlay = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color[colorType.black],
  opacity: 0.85,
  zIndex: 9,
})

const spin = keyframes({
  '0%, 100%': { transform: 'scale(0)', opacity: '1' },
  '50%': { transform: 'scale(1)', opacity: '0.25' },
})

export const spinner = style({
  position: 'relative',
  width: 50,
  height: 50,
  selectors: {
    '&::before, &::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: color[colorType.white],
      animation: `${spin} 1.75s ease-in-out infinite`,
    },
    '&::after': {
      animationDelay: 'calc(1.75s / -2)',
    },
  },
})
