import { useQuery } from "react-query";
import { calendarUrl } from "../../Api";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "../../Components/Card";

const Kalender = () => {
  const { isLoading, error, data } = useQuery("calendar", () =>
    fetch(calendarUrl).then((res) => res.json())
  );
  const teamCalendar = data?.data?.teamCalendar;
  console.log({ data });
  if (isLoading) {
    return (
      <>
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
      </>
    );
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return teamCalendar?.map((g) => <Card>{g.homeTeam.name}</Card>);
};

export default Kalender;
