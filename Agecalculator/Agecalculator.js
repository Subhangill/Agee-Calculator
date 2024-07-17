function calculateAge(){
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value)-1;
    let year = parseInt(document.getElementById('year').value);

    let dateofBitrth = new Date(year , month , day);
    let today = new Date();

    const ageYear = today.getFullYear() - dateofBitrth.getFullYear();
    const ageMonth = today.getMonth() - dateofBitrth.getMonth();
    const ageDate = today.getDate() - dateofBitrth.getDate();

    if(ageDate < 0){
        ageMonth--;
        ageDate += new Date(today.getFullYear(), today.getMonth , 0).getDate;

    }
    if (ageMonth < 0){
        ageYear--;
        ageMonth += 12;
    }
    document.getElementById('result').innerHTML= `You are ${ageDate} days , ${ageMonth} months and ${ageYear} years old.`
}