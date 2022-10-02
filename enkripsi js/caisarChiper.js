


function EncripcaisarChiper(p,n){
    p = p.toLowerCase()
    let c =[]
    let x = []
    for(let i=0; i<p.length; i++){
         let huruf  = p.charCodeAt(i)


        if(huruf+n > "z".charCodeAt(0)){
            huruf -= 26
            x[i] = (huruf + n)
            c[i] = String.fromCharCode((huruf) + n)

        }else if(huruf == " ".charCodeAt(0)){
            huruf = " ".charCodeAt(0)

            x[i] = (huruf + n)
            c[i] = String.fromCharCode((huruf))

        }else{
            x[i] = (huruf + n)
            c[i] = String.fromCharCode((huruf) + n)
        }
        


     

    }
    //console.log(x)
   // console.log("z".charCodeAt(0))
    //console.log(c)
    return c.join("")

}

function DecripCaisalChiper(c,n){
    c = c.toLowerCase()
    let p = []
    let x = []

    //console.log(c)

    for(let i=0; i<c.length; i++){
        //console.log(c)
        let huruf  = c.charCodeAt(i)
        
        //enterkey
        huruf -=n

        //get space
        if(huruf +n == " ".charCodeAt(0)){
            //console.log("pipit aku sayang kamu")
            x.push(huruf)
            p.push(String.fromCharCode(huruf+n))
        }else if(huruf<"a".charCodeAt(0)){
            huruf+=26
            x.push(huruf)
            p.push(String.fromCharCode(huruf))
        }else{
            x.push(huruf)
            p.push(String.fromCharCode(huruf))
        }

       
       
        //console.log(huruf,huruf-n-26,"a".charCodeAt(0))

         
       

    }
    //console.log(x)
    return p.join("")

}


