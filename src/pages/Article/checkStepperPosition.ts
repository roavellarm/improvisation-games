export const checkStepperPosition = (scrollPosition: number) => {
  if (scrollPosition >= 0 && scrollPosition < 12) return 0
  if (scrollPosition >= 12 && scrollPosition < 18) return 1
  if (scrollPosition >= 18 && scrollPosition < 20) return 2
  if (scrollPosition >= 20 && scrollPosition < 24) return 3
  if (scrollPosition >= 24 && scrollPosition < 30) return 4
  if (scrollPosition >= 30 && scrollPosition < 36) return 5
  if (scrollPosition >= 36 && scrollPosition < 46) return 6
  if (scrollPosition >= 46 && scrollPosition < 53) return 7
  if (scrollPosition >= 53 && scrollPosition < 60) return 8
  if (scrollPosition >= 60 && scrollPosition < 64) return 9
  if (scrollPosition >= 64 && scrollPosition < 72) return 10
  if (scrollPosition >= 72 && scrollPosition < 78) return 11
  if (scrollPosition >= 78 && scrollPosition < 81) return 12
  if (scrollPosition >= 81 && scrollPosition < 86) return 13
  if (scrollPosition >= 86 && scrollPosition < 92) return 14
  if (scrollPosition >= 92 && scrollPosition < 97) return 15
  if (scrollPosition >= 97 && scrollPosition <= 99) return 16
  return 17
}
