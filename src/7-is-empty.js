export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type ==='string' && stringArrayOrObject==="" || type==='object' && stringArrayOrObject.length==0 || type==='object' && Object.keys(stringArrayOrObject).length === 0  )  {
    return true
  }
 
  else {return false}
}


