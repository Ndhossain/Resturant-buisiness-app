import Slider from "./Slider";

export default function CategoriesSlide() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "1em 0",
        }}
      >
        CATEGORIES
      </h1>
      <Slider url="https://www.themealdb.com/api/json/v1/1/categories.php" />
    </div>
  );
}
