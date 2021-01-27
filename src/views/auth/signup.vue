<template>
    <div>
       <div class="row">
          <div class="col-6 left d-none d-md-block offset-1 offset-md-0">
               <div>
                   <img class="" src="..\..\..\public\imgs\Mobile login-pana@1X.png">
                   <p>
                       Help us getting better by sending your thoughts about us and about our services,
                       you can also mention any other points that are related  by sending your by 
                       sending thoughts by sending your thoughts.
                   </p>
               </div>
           </div>
           <div class="col-12 col-md-6 right text-center">
               <h1 class="my-4 text-center">Sign Up</h1>
               <div class="signup-btn">
                <div class="d-flex">
                    <button class="btn btn-primary btn-lg btn-block btnn google mr-2"> 
                   <img src="..\..\..\public\imgs\Icon awesome-google@1X.png" alt="" srcset="" width="25px"> login with google 
                </button>
                <button class="btn btn-primary btn-lg btn-block btnn facebook"> 
                   <img src="..\..\..\public\imgs\Icon awesome-facebook-f@1X.png" alt="" srcset="" width="25px"> login with facebook 
                </button>
                </div>
              </div>
              <p class="hr mt-3 d-none d-lg-block">or</p>
              <div class="form-group mt-3">
                <label for="full-name">Full Name</label>
                <input class="form-control" id="full-name" type="text" placeholder="enter your name">
             </div>
             <div class="form-group mt-3">
                <label for="E-mail">E-Name</label>
                <input class="form-control" id="E-mail" type="text" placeholder="name@example.com">
             </div>
             <div class="form-group mt-3">
                <label for="password">Password</label>
                <input class="form-control" id="password" type="text" placeholder="at least 8 charachters">
                <div class="pass-power d-flex justify-content-between mt-3">
                      <div></div>  
                      <div></div>  
                      <div></div>  
                      <div></div>  
                      <div></div>  
                </div>
                <div class="terms d-flex mt-4">
                    <input type="checkbox">
                    <p> By creating an account you agree to our terms of <span class="highlight">Service, Privacy Policy,</span> and our default <span class="highlight">NotificationSettings.</span></p>
                </div>
                <div class="create-account">
                    <button class="btn-create-account">create account</button>
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
        .d-flex{
         width: 80%;
         margin: auto;
        .btnn{
             width: 251px;
            outline: none;
            margin: auto;
            border-radius: 10px;
            &.google{
             background-color: #E71111 !important;
            img{
                margin-right:10px ;
               }
            }
            &.facebook{
              background-color:#0973FF;
              img{
                width: 14px;
                margin-right: 10px;
                }
            }
        }
     }
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
                left: 66px;
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

            .terms{
                p{
                    margin-top: -6px;
                    .highlight{
                        color: blue;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
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
                    margin-bottom: 10px;
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


}

    @media (max-width: 1145px) {
     
      .facebook-btn{
          display: block !important;
          width: 460px !important;
          margin: 30px auto 0 auto !important;
      }
      .btn-google{
          display: block !important;
          margin: 0 auto 0 auto !important;
      }
       .form-control{
          width: 460px !important;
      }
    }

</style>