import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Card = ({ children, props }) => {
  return (
    <MaterialCard className="rounded-lg flex-grow" {...props}>
      <CardContent>{children}</CardContent>
    </MaterialCard>
  );
};

export default Card;
