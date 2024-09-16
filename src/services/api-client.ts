import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'dfbbd1e8e5674bc28d6babd2066f02a5'
    }
})