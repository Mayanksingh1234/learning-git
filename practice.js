let obj={
    name:"mayank sungh",
    subject:["maths","science","english"],
    fun:function(){
        let sub=this.subject.map((i)=>i);
        console.log(sub)
    }
}

obj.fun();
