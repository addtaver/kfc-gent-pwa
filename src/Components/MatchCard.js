import Card from "./Card";

const MatchCard = ({ match: { homeTeam, awayTeam } }) => {
  return (
    <Card>
      <div className="flex">
        <div className="text-xs">{homeTeam.name}</div>
        <div className="text-xs">{awayTeam.name}</div>
      </div>
    </Card>
  );
};

export default MatchCard;
