<template>
    <div>
       <div class="row">
           <div class="col-6 left d-none d-md-block">
               <div>
                   <img class="" src="..\..\..\public\imgs\Authentication-pana@1X.png">
                   <p>
                       Help us getting better by sending your thoughts about us and about our services,
                       you can also mention any other points that are related  by sending your by 
                       sending thoughts by sending your thoughts.
                   </p>
               </div>
           </div>
           <div class="col-12 col-md-6  right text-center ">
               <h1 class="my-4 text-center">Verify your e-mail</h1>
               <p class="ppp"> Please enter the 4 digit code sent to name@example.com</p>
             <div class="my-4 v-code">
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i1">
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i2"> 
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i3">
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i4">
             </div>
             <h1 id="count"></h1>
             <div class="form-group my-5">
                <div class="create-account">
                    <button class="btn-create-account">verfiy</button>
                     <div class="highlight">resend code</div>
                </div>
             </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'verfiyemail',
    data(){
       return{
        i:{
            i1:null,
            i2:null,
            i3:null,
            i4:null,
         }
       }
    },
    methods:{
        check(e){
            // check verfiy inputs
            var reqnumber = [0,1,2,3,4,5,6,7,8,9];  
            var isallow   = reqnumber.includes(parseInt(e.target.value)); 
            

            if(isallow){
                if(e.target.nextElementSibling != null){
                    e.target.nextElementSibling.focus();
                    
                }
            } else {
                e.target.value = '';
            }
        }
    },
    mounted(){
        //counter
        const StartMinutes = 2;
        let time = StartMinutes * 60;

        const CountdownE = document.getElementById("count");

        var my = setInterval(()=>{
                const minutes = Math.floor(time / 60);
                const sec     = time % 60;

                CountdownE.innerHTML = `${minutes}: ${sec}`;

                time--;
                if(time < 0) {
                    clearInterval(my);
                }
            }, 1000)
        }
}
</script>

<style lang="scss" scoped>
body{
    overflow-x:hidden ;
}
.row{
    margin: 0 !important;
        .left {
        background-color: #447AE6;
        height: 100vh;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            
            img{
                width: 500px;
                margin-top: 50px;
            }
            p{
                font-size: 14px;
                padding-top: 20px;
                width: 80%;
                color: #FFFFFF;
                text-align: center;
            }
        }
    }

    .right{
         margin-top: 80px;
        .ppp{
            font-size: 19px;
        }
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        
        }
        .i-code{
            border: none;
            background-image: none;
            background-color: transparent;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            text-align: center;
            height: 60px;
            width: 60px;
            border-radius: 10px;
            margin: 0 4px;
            border: 2px solid #4f5b66;
            font-size: 38px;
             &:focus {
                outline:none;
            }
        }
        .form-group{
            width: 500px;
            margin: auto;
            label{
                text-align: left;
                display: block;
                font-weight: 400;
            }
            .form-control {
                border-radius: 10px;
            }

            .highlight{
                        color: blue;
                        text-decoration: underline;
                        cursor: pointer;
                    }

            .create-account{
                .btn-create-account{
                    width: 461px;
                    opacity: 0.5019607843137255;
                    background-color: #4378E3;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                    padding: 6px;
                    margin-right: 10px;
                    box-shadow: 2px 2px 3px grey;
                    height: 50px;
                    margin-bottom: 20px;
                    transition: all 0.2s;
                    &:hover{
                        opacity: 1;
                    }
                    &:focus{
                        outline: none;
                    }
                }
            }
        }
    }


}



</style>