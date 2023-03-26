function Row({children}){
   
    return (
    <div style={{display:"flex",
    justifyContent:"center",
    gap:"20px",
    alignItems:"center"
    }}>
        {children}
    </div>)
}

export default Row