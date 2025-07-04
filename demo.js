let file={
    name:"mayank singh",
    class:"1A",
    fun:()=>{
        console.log(this.name);
        
    },
    dev:function(){
        console.log(this.name);
        
    }
}
file.fun();