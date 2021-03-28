import { useLastPlayedMatch } from "../Hooks/Api/api";
import Card from "./Card";

const LastPlayedMatchContainer = () => {
  const [isLoading, error, data] = useLastPlayedMatch();

  return <Card />;
};

export default LastPlayedMatchContainer;
