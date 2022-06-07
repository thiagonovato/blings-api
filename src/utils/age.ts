export default function age(birthday: string): number {
  const date = new Date(birthday.substring(0, 10))
  const highAge = ~~((Date.now() - (+new Date(date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()))) / 31557600000)
  return highAge
}