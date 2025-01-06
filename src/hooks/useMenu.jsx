import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic"
const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axiosPublic.get('/all-menu')
            .then(data => setMenu(data.data))
    }, [axiosPublic])
    return menu
}

export default useMenu;