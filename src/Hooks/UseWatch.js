import { useEffect, useState } from "react"


const useWatch = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        fetch('https://ware-house.onrender.com/watch')
        .then(res=>res.json())
        .then(data=>setWatches(data))
    }, [])

    return[watches]
}

export default useWatch ;