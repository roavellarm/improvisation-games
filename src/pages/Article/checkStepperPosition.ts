export const checkStepperPosition = (scrollPosition: number) => {
  if (scrollPosition >= 0 && scrollPosition < 12) return { index: 0 }
  if (scrollPosition >= 12 && scrollPosition < 18) return { index: 1 }
  if (scrollPosition >= 18 && scrollPosition < 20) return { index: 2 }
  if (scrollPosition >= 20 && scrollPosition < 24) return { index: 3 }
  if (scrollPosition >= 24 && scrollPosition < 30) return { index: 4 }
  if (scrollPosition >= 30 && scrollPosition < 36) return { index: 5 }
  if (scrollPosition >= 36 && scrollPosition < 46) return { index: 6 }
  if (scrollPosition >= 46 && scrollPosition < 53) return { index: 7 }
  if (scrollPosition >= 53 && scrollPosition < 60) return { index: 8 }
  if (scrollPosition >= 60 && scrollPosition < 64) return { index: 9 }
  if (scrollPosition >= 64 && scrollPosition < 72) return { index: 10 }
  if (scrollPosition >= 72 && scrollPosition < 78) return { index: 11 }
  if (scrollPosition >= 78 && scrollPosition < 81) return { index: 12 }
  if (scrollPosition >= 81 && scrollPosition < 86) return { index: 13 }
  if (scrollPosition >= 86 && scrollPosition < 92) return { index: 14 }
  if (scrollPosition >= 92 && scrollPosition < 98) return { index: 15 }
  if (scrollPosition >= 98 && scrollPosition < 99) return { index: 16 }
  return { index: 17 }
}
