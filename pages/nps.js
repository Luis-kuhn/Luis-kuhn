
function Home() {
    return (
        <div style={{ margin: "0"}}>

            <iframe src="https://luis-kuhn.github.io/nps/" 
                style={{
                    position: "fixed",
                    background: "#000",
                    border: "none",
                    top: "0", 
                    right: "0",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                }}
            >Carregando…</iframe>
        </div>
    )
}

export default Home