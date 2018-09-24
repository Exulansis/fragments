export const getUserInput = async (message: string) => {
  return new Promise(resolve => {
    console.log(message)
    process.stdin.on('data', input => resolve(input.toString()))
  })
}