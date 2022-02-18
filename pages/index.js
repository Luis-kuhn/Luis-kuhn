// Tell webpack this JS file uses this image
import Image from 'next/image'
import profilePic from '../src/assets/avatar.jpeg'
import TypingTextEfect from '../src/components/Digitador/index'

function StyleCss(params) {
    return (
        <style jsx global>{`
            .avatar {
                border-radius: 50%;
            }
        `}
        </style>
    )
}

function Home() {
  return (
    <>
        <StyleCss/>
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
    </>
  )
}

export default Home