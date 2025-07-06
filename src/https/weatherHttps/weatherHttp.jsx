import { $authHost } from "..";


export default class Weather {

    static weatherLinks(key, city){
        return $authHost.get(`/api/data/2.5/forecast?q=${city}&appid=${key}`)
    }
}