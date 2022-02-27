export const hashtags = (text) => {

  let newText= text.split(" ")
  return newText.filter((items)=>items.startsWith("#"))
}
