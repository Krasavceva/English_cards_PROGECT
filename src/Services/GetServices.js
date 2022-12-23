import ErrorPage from "../pages/ErrorPage";

class GetServices {
  async getWord() {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      const data = await response.json();
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
}
export default GetServices;
