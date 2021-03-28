import Home from "./Pages/Home/Home";
import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import TodayIcon from "@material-ui/icons/Today";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import PersonIcon from "@material-ui/icons/Person";
import Kalender from "./Pages/Kalender/Kalender";
import Spelers from "./Pages/Spelers/Spelers";
import Profiel from "./Pages/Profiel/Profiel";
import { purple } from "@material-ui/core/colors";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  const [page, setPage] = useState(0);

  const pages = [<Home />, <Kalender />, <Spelers />, <Profiel />];

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <div className="flex flex-col justify-center container mx-auto px-4 space-y-4 mt-3 mb-20">
          {pages[page]}
        </div>
        <BottomNavigation
          value={page}
          onChange={(e, newValue) => {
            setPage(newValue);
          }}
          showLabels
          className="fixed bottom-0 w-full"
        >
          <BottomNavigationAction label="Overzicht" icon={<HomeIcon />} />
          <BottomNavigationAction label="Kalender" icon={<TodayIcon />} />
          <BottomNavigationAction label="Spelers" icon={<SportsSoccerIcon />} />
          <BottomNavigationAction label="Profiel" icon={<PersonIcon />} />
        </BottomNavigation>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
