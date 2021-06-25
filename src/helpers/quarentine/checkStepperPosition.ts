export const checkStepperPosition = (scrollPosition: number) => {
  if (scrollPosition >= 0 && scrollPosition < 22) return 0
  if (scrollPosition >= 22 && scrollPosition < 32) return 1
  if (scrollPosition >= 32 && scrollPosition < 45) return 2
  if (scrollPosition >= 45 && scrollPosition < 51) return 3
  if (scrollPosition >= 51 && scrollPosition < 54) return 4
  if (scrollPosition >= 54 && scrollPosition < 65) return 5
  if (scrollPosition >= 65 && scrollPosition < 75) return 6
  if (scrollPosition >= 75 && scrollPosition < 85) return 7
  if (scrollPosition >= 85 && scrollPosition < 90) return 8
  if (scrollPosition >= 90 && scrollPosition < 105) return 9
  return 10
}
