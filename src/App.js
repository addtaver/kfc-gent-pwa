import Home from "./Pages/Home/Home";
import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Kalender from "./Pages/Kalender/Kalender";
import { purple } from "@material-ui/core/colors";

function App() {
  const [page, setPage] = useState(0);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {page === 0 ? <Home /> : <Kalender />}
      <BottomNavigation
        value={page}
        onChange={(e, newValue) => {
          setPage(newValue);
        }}
        showLabels
        className="fixed bottom-0 w-full"
      >
        <BottomNavigationAction label="Overzicht" icon={<HomeIcon />} />
        <BottomNavigationAction label="Kalender" icon={<HomeIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default App;
