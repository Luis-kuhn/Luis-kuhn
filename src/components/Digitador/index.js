import Typing from 'react-typing-animation';



function TypingTextEfect({text, style}) {
  return (

    <Typing>
        <h1  style={style ? style : {
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "40px"
                  }}
        >
            {text}
        </h1>
    </Typing>
  )
}

export default TypingTextEfect