<template>
    <div>
       <div class="row">
           <div class="col-6 left d-none d-md-block ">
               <div>
                   <img class=" mt-4" src="..\..\..\public\imgs\Forgot password-pana@1X.png">
                   <p>
                       Help us getting better by sending your thoughts about us and about our services,
                       you can also mention any other points that are related  by sending your by 
                       sending thoughts by sending your thoughts.
                   </p>
               </div>
           </div>
           <div class="col-12 col-md-6  right text-center ">
               <h1 class="my-4 text-center  mt-5">Create new password</h1>
               <p class="ppp">Your new password must be different from previously used password.</p>
             <div class="form-group my-4">
                <label for="E-mail">E-mail</label>
                <input class="form-control" id="E-mail" type="text" placeholder="name@example.com">
             </div>
             <div class="form-group my-5">
                <div class="create-account">
                    <button class="btn-create-account">Send</button>
                     <div class="highlight">try another way</div>
                </div>
             </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    
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
                width: 300px;
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
       

        .ppp{
            font-size: 19px;
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
                width: 500px;

                @media (max-width: 550px) {
                    .right .form-group .form-control {
                        width: 200px  !important; 
                    }
                }
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
                    outline: none;
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

     @media (max-width: 550px) {
    .right .form-group .form-control {
     width: 480px  !important; 
            }
     }
               
}



</style>