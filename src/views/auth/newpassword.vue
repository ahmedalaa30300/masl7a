<template>
    <div>
       <div class="row">
           <div class="col-6 left d-none d-md-block">
               <div>
                   <img class="" src="..\..\..\public\imgs\Secure data-pana@1X.png">
                   <p>
                       Help us getting better by sending your thoughts about us and about our services,
                       you can also mention any other points that are related  by sending your by 
                       sending thoughts by sending your thoughts.
                   </p>
               </div>
           </div>
           <div class="col-12 col-md-6  right text-center">
               <h1 class="my-4 text-center"> Create new password</h1>
               <p>Your new password must be different from previously used password.</p>
             <div class="form-group mt-3">
                <label for="E-mail">new password</label>
                <input class="form-control" id="E-mail" type="text" placeholder="new password">
             </div>
             <div class="form-group mt-3">
                <label for="password"> confirm new password</label>
                <input class="form-control" id="password" type="text" placeholder=" confirm new password">

                <div class="create-account mt-4">
                    <button class="btn-create-account">Log In</button>
                     <p> <span class="highlight">Change password</span></p>
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
        background-color: #BA43DE;
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
                width: 450px;
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

        .hr{
            color: #0a000085;
            &::before{
              content: '';
                width: 228px;
                height: 1px;
                background-color: #0a000027;
                display: block;
                position: relative;
                top: 15px;
                left: 10%;
            }
             &::after{
              content: '';
                width: 228px;
                height: 1px;
                background-color: #0a000027;
                display: block;
                position: relative;
                top: -10px;
                left: 346px;
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
            .pass-power div{
                width: 80px;
                height: 10px;
                border: solid rgba(0, 0, 0, 0.171) 1px;
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
                    background-color: #BC45D6;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                    padding: 6px;
                    margin-right: 10px;
                    box-shadow: 2px 2px 3px grey;
                    height: 50px;
                    margin-bottom: 20px;
                }
            }
        }
    }


}

    @media (max-width: 1145px) {
     
      .facebook-btn{
          display: block !important;
          width: 460px !important;
          margin-top: 30px !important;
      }
      .btn-google{
            display: block !important;
        }
        .form-control{
            width: 480px !important;
      }
    }

</style>