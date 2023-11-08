const style={
    width:'80%',
    position:'relative',
    display:'grid',
    gridTemplateColumns:'repeat(2, auto)',
    gridAutoRows:'auto',
    justifyItems:'center',
    justifyContent:'center',
    gap:'10px',
    marginBottom:'5px',
}

const AppBody=({children})=>(
    <div id='AppBody' style={style}>
        {children}
    </div>
)

export default AppBody