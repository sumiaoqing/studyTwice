function setTime(time:number) :void
{
    if(time<=0)
    {
        return
    }else
    {
        console.log(time)
        time--
        setTime(time)
    }
}
// setTime(4)

let time:number=11
let timeSet=setInterval(()=>
{
 if(time>0)
 {
    time--
    console.log(time)
 }else
 {
     clearTimeout(timeSet)
 }
},1000)
export {}