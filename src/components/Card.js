import "./Card.css";

const Card = () => {
  const imgLink =
    "https://images.immediate.co.uk/production/volatile/sites/30/2008/01/EasyWhiteBread-7756545.jpg?resize=768,574";

  return (
    <div className="card">
      <img src={imgLink}></img>
      <h2>Roti</h2>
      <p>Ini roti</p>
      <p>Exp 1-01-2023</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Card;
