
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


export const GetFormattedDate =(cusdate)=>{
    const newdate = new Date(cusdate)

    const dayOfWeek = days[newdate.getDay()]
    const day = newdate.getDate();
    const monthName = months[newdate.getMonth()];
    const year = newdate.getFullYear();

    const formattedDate = `${dayOfWeek} ${day} ${monthName} ${year}`
    return formattedDate;
}