let defaultImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Person = (props) => {
  let { id, name, age, image } = props.person;
  return (
    <div>
      <li>
        <div>
          <h3>{name || "Name not found"}</h3>
          <h3>{age || "Age not found"}</h3>
          <img
            // src={
            //   (image && image[0] && image[0].small && image[0].small.url) ||
            //   defaultImage
            // }
            src={image?.[0]?.small?.url || defaultImage}
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "30px",
              borderWidth: "1px",
              borderColor: "0000000",
              borderStyle: "solid",
            }}
            alt="Loading"
          />
        </div>
      </li>
    </div>
  );
};

export default Person;
