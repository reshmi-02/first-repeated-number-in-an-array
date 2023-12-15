let array =[10,20,30,20,30,50]
document.write(`given array = [${array}]<br><br>`)
let boo=false
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        console.log(j);
        if(array[i]===array[j]){
            console.log(array[j]);
            document.write(array[j]+"is first repeated and position is "+(i+1));
            boo=true
        }
       
    }
    if(boo){
        break
    }
}

