import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import ThemeToggle from "./components/ThemeToggle";
import WeatherCard from "./components/WeatherCard";
import "./styles.css";

export default function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App dark p-4" : "App  p-4"}>
      <ThemeToggle />
      <Form />
      <WeatherCard />
    </div>
  );
}
