export const checkStepperPosition = (scrollPosition: number) => {
  if (scrollPosition >= 0 && scrollPosition < 22) return 0
  if (scrollPosition >= 22 && scrollPosition < 32) return 1
  if (scrollPosition >= 32 && scrollPosition < 42) return 2
  if (scrollPosition >= 42 && scrollPosition < 51) return 3
  if (scrollPosition >= 51 && scrollPosition < 60) return 4
  if (scrollPosition >= 60 && scrollPosition < 73) return 5
  if (scrollPosition >= 73 && scrollPosition < 80) return 6
  if (scrollPosition >= 80 && scrollPosition < 90) return 7
  if (scrollPosition >= 90 && scrollPosition < 98) return 8
  if (scrollPosition >= 98 && scrollPosition < 105) return 9
  return 10
}
