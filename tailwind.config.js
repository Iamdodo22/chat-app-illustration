/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./index.js"],
 theme: {
   extend: {colors:
    {paleViolet:"hsl(276, 100%, 81%)",
    moderateViolet:"hsl(276, 55%, 52%)",
    darkViolet:"hsl(271, 15%, 43%)",
    grayishBlue:"hsl(206, 6%, 79%)",
    veryDarkViolet:"hsl(271, 36%, 24%)",
    darkGrayishViolet:"hsl(270, 7%, 64%)",
    bgPink:"hsl(293, 100%, 63%)",
    bgViolet:"hsl(264, 100%, 61%)",
    bgApp:"hsl(270, 20%, 96%)",
    bgCircle:"hsl(289, 100%, 72%)",
    bgRight:"hsl(270, 20%, 96%)"}},
    fontFamily:{
       serif:['Rubik']
    }
 },
 plugins: [],
}

