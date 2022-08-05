import {createRouter} from "@expo/ex-navigation";
import DetailScreen from "./screens/DetailScreen";

export default createRouter(() => ({
    home: () => HomeScreen,
    details: () => DetailScreen
}));