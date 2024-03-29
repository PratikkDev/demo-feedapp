import { NavigationContainer } from "@react-navigation/native";
import { DataProvider } from "./src/context/DataContext";
import Router from "./src/navigation/router";
export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </DataProvider>
  );
}
