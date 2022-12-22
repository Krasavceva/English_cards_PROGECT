import ErrorPage from "../pages/ErrorPage";

async function loadData() {
  try {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const data = await response.json();
    //получаем весь массив целиком
    return data;
  } catch (err) {
    return (
      <>
        <div>Ошибка: {err.message}</div>
        <ErrorPage />{" "}
      </>
    );
  }
}
export default loadData;
