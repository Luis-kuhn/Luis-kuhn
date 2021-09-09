import Typing from 'react-typing-animation';



function TypingTextEfect({text}) {
  return (

    <Typing>
        <h1  style={{
                    display: "flex",
                    justifyContent: "center",}}
        >
            {text}
        </h1>
    </Typing>
  )
}

export default TypingTextEfect