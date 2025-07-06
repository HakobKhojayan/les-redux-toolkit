import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadWeatherSlice } from "../../redux/weatherSlice/weatherSlice";


export default function Home() {
    const [data, setData] = useState({});
    const weatherData = useSelector(state => state.weather?.data)


    const dispatch = useDispatch()

    useEffect(() => {
        if (weatherData) {
            setData(weatherData);
        }
    }, [weatherData])

    useEffect(() => {
        dispatch(loadWeatherSlice("cb36d56d59a6202351fe6cff27d8977a", "moscow"));
    }, [dispatch]);

    console.log(weatherData, "data");

    return (
        <div>
            <h1>Hello, Weather!</h1>
            {data && (
                <div>
                    <p>Temperature: {data.main?.temp}</p>
                    <p>City: {data.city?.name}</p>
                </div>
            )}
        </div>
    )
}