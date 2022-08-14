let timer;
const dbounce=(fn,delay)=>{
    if(timer) clearTimeout(timer)
    timer=setTimeout(fn,delay)
}

const stringCapitalize=(word)=>{
   const lowerString=word.toLowerCase()
   return lowerString.charAt(0).toUpperCase() + lowerString.slice(1)
}

export default dbounce;
export { stringCapitalize}