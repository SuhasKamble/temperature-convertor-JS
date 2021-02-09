const btn = document.querySelector('.btn')

let result;
btn.addEventListener('click',()=>{
    let temp = document.getElementById('temp').value
    console.log()
    let temp_var = document.getElementById('temp_var')

    let tempVal = temp_var.options[temp_var.selectedIndex].value;
    
    if(tempVal=="cel"){
        result = celToFah(temp)
        result = result.toFixed(2)
        document.querySelector('.result').innerHTML=`<h3> ${result} °Fahrenheit</h3>`
    }
    else{
        result = fahToCel(temp)
        result = result.toFixed(2)
        document.querySelector('.result').innerHTML=`<h3>${result}° Celcius</h3>`
    }
    
  
})


function celToFah(val){
    let fahrenheit = (val*9/5)+32
    return fahrenheit
}


function fahToCel(val){
    let celcius = (val-32)*5/9
    return celcius
}