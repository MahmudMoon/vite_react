import { people } from "../assets/data";
import Person from "./person-component";

const ListingPersons = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person person={person} />;
      })}
    </div>
  );
};

export default ListingPersons;
