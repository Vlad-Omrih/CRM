function MyConcat(arr: string[]) {
  return arr.reduce((a: string, b: string) => a + b)
}

MyConcat(['Hello', 'World'])

console.log(MyConcat(['Hello', 'World']));
