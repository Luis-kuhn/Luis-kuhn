// Tell webpack this JS file uses this image
import Image from 'next/image'
import profilePic from '../src/assets/profile3.svg'
import Typing from 'react-typing-animation';
import devicon from 'devicon'

function StyleCss(params) {
    return (
        <style jsx global>{`
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        /* Global styles */
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
            color: #333;
            background-size: cover;
            background-attachment: fixed;
        }
        
        .title {
            display: flex;
            justify-content: center;
            letter-spacing: -0.02em;
            margin: 1rem;
            font-size: 1.5rem;
        }
        
        /* Card styles */
        .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            text-decoration: none;
            border: 1px solid #eaeaed;
            border-radius: 10px;
            font-size: 1.6rem;
            transition: color 0.15s ease, border-color 0.15s ease;
        }
        .cardDescription {
            margin: 0;
            font-size: 1rem;
            line-height: 1.5;
        }
        .card:hover {
            border: 1px solid #333;
        }
        
        /* Grid styles */
        .grid {
            margin: 5%;
        }
        
        /* Modal styles */
        .glass-modal-wrapper {
            padding: 2%;
            position: relative;
            margin: 5vh auto;
            width: 30vw;
            height: 75vh;
            border: none;
            background: inherit;
            border-radius: 5px;
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
            z-index: -1;
        }
        
        /* Avatar styles */
        .avatar {
            border-radius: 50%;
        }
        
        /* Link styles */
        a {
            text-decoration: none;
            color: black;
        }
        
        /* Media queries */
        @media only screen and (max-width: 380px) {
            * {
                font-size: 2.5rem;
            }
        }
        
        @media only screen and (max-width: 1254px) {
            .title {
                font-size: 1rem;

            }
            .grid {
                margin: 40px 10px;
            }
            
            .card {
                margin: 5px 10px;
            }
            
            .glass-modal-wrapper {
                margin: 0;
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
                        borderRadius: "50%",
                        margin: '2rem 0',
                    }}>
                    <Image src={profilePic} className="avatar"  width={150} height={150} title="Luis Augusto Kuhn photo" alt="Luis Augusto Kuhn image" />
                </div>
                <Typing className='title'>
                    <h1 >
                        {"Luis Augusto Kühn"}
                    </h1>
                </Typing>
                <p style={{
                    textAlign: "center",
                    lineHeight: "1.5",
                    fontSize: "1.3rem" }}>
                    Software Engineer
                </p>
                <br/>
                <p style={{
                    textAlign: "center",
                    lineHeight: "1.5",
                    fontSize: "1.1rem" }}>
                 
                    I am {getAge(10,5,2001)} years old, I create blogs and websites, apps, and also develop APIs.
                    You can reach me via email at {<a href='mailto:contact@luiskuhn.dev'>contact@luiskuhn.dev</a>}.
                </p>
              
        
                <div class="grid">
                    <div class="card">
                        <a href="https://github.com/Luis-kuhn">
                            <b >
                                <a >
                                    <i class="devicon-github-plain"></i>
                                    GitHub
                                </a>
                                
                            </b>
                            
                        </a>
                        <p class="cardDescription">Here, you can find a bit more about the projects I'm working on.</p>
                    </div>

                    <div class="card">
                      
                            <b >
                                <a href="https://www.linkedin.com/in/luiskuhn/">
                                    <i class="devicon-linkedin-plain"></i>
                                    Linkedin
                                </a>
                            </b>
                            <p class="cardDescription">Here, you can find a little more about my professional background and my resume.</p>

                    </div>
                    {/* <div class="card">
                      
                      <b >
                          <a href="https://www.linkedin.com/in/luiskuhn/">
                              <i class="devicon-linkedin-plain"></i>
                              Linkedin
                          </a>
                      </b>
              
              </div> */}
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