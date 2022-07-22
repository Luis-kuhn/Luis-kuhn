import Typing from 'react-typing-animation';



function TypingTextEfect({text}) {
  return (

    <Typing>
        <h1  style={{
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