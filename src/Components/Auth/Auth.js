

export const getAllData = async id =>{
    const res = await fetch(`http://localhost:5000/AllMachine/${id}`)
    const data = res.json()

    return data ;

}