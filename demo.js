let file={
    name:"mayank singh",
    class:"1A",
    fun:()=>{
        console.log(this.class);
        
    },
    dev:function(){
        console.log(this.name);
        
    },
    demo:async function(){
        console.log("hell");
        
    },
}
file.fun()