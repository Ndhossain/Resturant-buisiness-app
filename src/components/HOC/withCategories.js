import useFetch from "../hooks/useFetch"

 function withCategories(OriginComp) {
     const NewComp = () => {
        const { loading, error, result } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php", "GET");

        return (
            <OriginComp cateLoading={loading} cateError={error} cateResult={result} />
        );
     }
     return NewComp;
 }

 export default withCategories;