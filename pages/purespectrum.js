// Tell webpack this JS file uses this image
import Image from 'next/image'
import profilePic from '../src/assets/profile.jpg'
import TypingTextEfect from '../src/components/Digitador/index'
import devicon from 'devicon'
import purespectrumIcon from '../src/assets/purespectrum.png'
import brazilFlag from '../src/assets/brazilflag.png'
function StyleCss(params) {
    return (
        <style jsx global>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
                font-size: 100%;
            }
            
            body {
                background: 
                radial-gradient(ellipse at center, rgba(30, 148, 202,0.1) 0%, rgba(255,255,255,0) 50%), /* niebieski */
                radial-gradient(ellipse at center, rgba(35, 118, 43,0.1) 0%, rgba(255,255,255,0) 50%), /* niebieski */
                radial-gradient(ellipse at center, rgba(244, 215, 79,0.1) 0%, rgba(255,255,255,0) 50%), /*czerwony */
                radial-gradient(ellipse at center, rgba(222, 43, 50,0.1) 0%, rgba(255,255,255,0) 50%) /*zielony */
                #e1e3e3;
            background-repeat: 
                no-repeat, 
                no-repeat, 
                no-repeat;
            background-size: 
                900px 900px,
                900px 900px,
                900px 900px;
            background-attachment: fixed;
            
            animation:bganimation 30s infinite;
            }




@keyframes bganimation
{
0%   {
           background-position: 
               -100% -100%,
               200% 200%,
               -100% 200%,
               200% -100%;
      }
      50% {
           background-position: 
               150% 100%,
               -200% 100%,
               100% 0%,
               0% 100%;
      }
      100% {
           background-position: 
               -100% -100%,
               200% 200%,
               -100% 200%,
               200% -100%;
      }
}


            
            .glass-modal-wrapper {
                padding: 2%;
                position: relative;
                margin: 15vh auto;
                width: 30vw;
                height: 70vh;
                border: none;
                // background: inherit;
                // box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                overflow: hidden;
                z-index: 1;
            }
            
            .glass-modal-wrapper::before {
                content: "";
                background: inherit;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            
                // box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.9);
                // filter: blur(10px);
                z-index: -1;
            }
            .avatar {
                border-radius: 50%;
            }

            .card:hover{
                border: none;
                background: inherit;
                box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
                border-radius: 5px;
                overflow: hidden;
                
            }
            .card{
                margin: 5px 5% 5px 5%;
                border: none;
                background: inherit;
                box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                overflow: hidden;
                color: black;
                padding: 10px;
                text-align: center;
                -webkit-transition: color 0.15s ease, border-color 0.15s ease;
                transition: color 0.15s ease, border-color 0.15s ease;
                text-decoration: none;
            }

            .grid {
                margin: 5%
            }

            a {
                text-decoration:none;
                color: black;
            }

            @media only screen and (max-width: 380px) {
                *{
                    font-size: 25px;
                }
            }
            @media only screen and (max-width: 1254px) {
                .grid {
                    margin: 40px 10px 40px 10px;
                }    
                .card{
                    margin: 5px 10px 5px 10px;
                }
                .glass-modal-wrapper {
                    margin: 0px;
                    width: 100vw;
                    height: 100vh;
                }
            }

        `}
        </style>
    )
}
function getAge(month, day, year) {
    const birthDate = new Date(year, month - 1, day)
    const fromNow = new Date() - birthDate

    const absoluteAge = new Date(fromNow).getFullYear()

    // that's because timestamps starts from 1970, so
    // we're getting relatively to that year
    return Math.abs(absoluteAge - 1970)
}


function Home() {
    return (
        <>
            <title>Luis Kühn</title>

            <StyleCss />
            <div class="glass-modal-wrapper">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px"
                    }}>
                    <Image src={profilePic} className="avatar" width={150} height={150} alt="Picture of the author" />

                    <Image src={purespectrumIcon} className="avatar" width={150} height={150} alt="Picture of the author" />
                </div>
                <TypingTextEfect
                    text={"Luis Augusto Kühn"}
                />
                <h3 style={{ textAlign: "center" }}>
                    Software Engineer
                </h3>
                <div class="grid">
                    <div class="card">
                        <a href="https://github.com/Luis-kuhn">
                            <h1 >
                                <a >
                                    <i class="devicon-github-plain"></i>
                                    GitHub
                                </a>
                            </h1>
                        </a>
                    </div>

                    <div class="card">
                        <a href="https://www.linkedin.com/in/luiskuhn/">
                            <h1 >
                                <a >
                                    <i class="devicon-linkedin-plain"></i>
                                    Linkedin
                                </a>
                            </h1>
                        </a>
                    </div>

                    <div class="card">
                        <a href="https://drive.google.com/file/d/1dP96FG_BLsVaUykbaluE5Ur-cv4_UWBN/view?usp=sharing">
                            <h1 >
                                <a >
                                    <Image src={brazilFlag} width={20} height={16} alt="Baixar curriculo para purespectrum" />
                                    Currículo
                                </a>
                            </h1>
                        </a>
                    </div>
                </div>
                <p style={{ textAlign: "center" }}>
                    Soli Deo Gloria ✞
                </p>
            </div>

        </>

    )
}

export default Home



{/* <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}>
            <Image src={profilePic} className="avatar" width={200} height={200} alt="Picture of the author" />
            
        </div>
        <TypingTextEfect 
            text={"Luis Augusto Kühn"}
        /> */}