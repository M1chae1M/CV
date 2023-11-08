const style={
    display:'grid',
    justifyItems:'center',
    alignItems:'center',
    overflowX:'hidden',
    position:'relative',
    backgroundColor:'var(--bodyBackground)',
    justifyContent:'center',
}

const AppContainer=({children})=>(
    <div id='App' style={style}>
        {children}
    </div>
)

export default AppContainer