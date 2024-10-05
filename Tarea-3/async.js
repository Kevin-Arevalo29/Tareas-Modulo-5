const esperarSegundos = async (segundos)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("han pasado", segundos, "segundos")
            resolve()
        }, segundos*1000)
    })
}
