import Header from "../Header"
import Slider from "../Slider"

export default function Home() {
    return (
        <>
            <Header />
            <Slider url="https://www.themealdb.com/api/json/v1/1/categories.php" />
        </>
    )
}