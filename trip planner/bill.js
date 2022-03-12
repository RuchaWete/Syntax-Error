var a = new Array(2);
  for (var o = 0; o < 4; o++) {
    a[o] = new Array(2);
}
for(m=0;m<4;m++){
    for(k=0;k<4;k++)
    a[m][k] = 0;
}

let res = document.querySelector("#res");
let x = 0;
let i=0;

function calculate(y){
   i=y;
 
}

function due(){
    x = document.getElementById('amount').value;
    x = x/4;
    res.textContent = `Share of this bill is ${x} Rs per person`;
   

    for(m=0;m<4;m++){
        if(m==i){
            continue;
        }
        else{
            a[i][m]=a[i][m]+x;

            if(a[i][m]>a[m][i]){
                a[i][m]=a[i][m]-a[m][i];
                a[m][i] = 0;
            }
            else if (a[i][m]<a[m][i]){
                a[m][i]=a[m][i]-a[i][m];
                a[i][m] = 0;
                
            }
            else {
                a[i][m]=0;
                a[m][i]=0;
            }
            console.log(m + ' '+i+' '+a[m][i]+' '+a[i][m]);
        }
    }

    for(k=0;k<4;k++){
        for(m=0;m<4;m++){
            console.log(m + ' '+k+' '+a[m][k]);
        }
    }

    for(k=0;k<4;k++){
            for(m=0;m<4;m++){
               
                if(m==k){
                    continue;
                }
                else{
                    let idname = k+"_"+m; 
                    let printres = document.getElementById(`${idname}`)
                    printres.textContent = `User ${k} owes User ${m}  Rs ${a[m][k]}`;
                }
                
            }
}

}

