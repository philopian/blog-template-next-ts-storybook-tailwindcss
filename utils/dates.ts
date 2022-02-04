export function getCurrentYear() {
  return Number(new Date().toISOString().slice(0, 4))
}
