function outer(){
    let count=0
    return{
        inc:()=>{
            ++count;
            console.log(count);
            
        },
        dec:()=>{
            count--;
            console.log(count);
            
        }
    }

}

const inner=new outer()
inner.inc()