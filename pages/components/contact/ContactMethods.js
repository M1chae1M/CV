const style={
    display:'grid',
    width:'100%',
    height:'auto',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
}

const ContactMethods=({children})=>(
    <div style={style}>{children}</div>
)

export default ContactMethods