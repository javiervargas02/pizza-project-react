export default function Pizza({ pizzaData }) {
  return (
    <li className="pizza">
      <img src={pizzaData.photoName} alt={`Pizza ${pizzaData.name}`} />
      <div>
        <h3> {`Pizza ${pizzaData.name}`} </h3>
        <p>{pizzaData.ingredients}</p>
        <span>${pizzaData.price}</span>
      </div>
    </li>
  );
}
