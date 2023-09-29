//date adding
function makeDate(){
    let date=new Date();
    let day=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();
    let time=date.getTime()
    console.log(day,month,year,time);
}
