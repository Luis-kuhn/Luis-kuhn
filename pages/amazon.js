// Tell webpack this JS file uses this image
import Image from 'next/image'
import profilePic from '../src/assets/profile.jpg'
import amazonIcon from '../src/assets/amazonIcon2.png'
import TypingTextEfect from '../src/components/Digitador/index'
import devicon from 'devicon'

function StyleCss(params) {
    return (
        <style jsx global>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
            }
            
            body {
                background: rgb(65,144,236);
                background: linear-gradient(180deg, rgba(65,144,236,1) 0%, rgba(242,154,193,1) 100%);
                background-size: cover;
                background-attachment: fixed;
            }
            
            .glass-modal-wrapper {
                padding: 50px;
                position: relative;
                margin: 15vh auto;
                width: 30vw;
                height: 70vh;
                border: none;
                background: inherit;
                box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
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
            
                box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
                filter: blur(10px);
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
                margin: 40px
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
                    }}>
                    <Image src={profilePic} className="avatar" width={200} height={200} alt="Picture of the author" />
                </div>
                <TypingTextEfect
                    text={"Luis Augusto Kühn"}
                />
                <h3 style={{ textAlign: "center" }}>
                    Desenvolvedor De Software
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
                        <a href="https://drive.google.com/file/d/1aRaLVOs_8s3kQDFAqGJD2xGIhM1CWAEF/view?usp=sharing">
                            <h1 >
                                <a >
                                <Image src={amazonIcon} className="avatar" width={33} height={33} alt="Baixar curriculo para amazon" /> 
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