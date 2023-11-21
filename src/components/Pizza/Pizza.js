export default function Pizza({ path, name, ingredients, price }) {
  return (
    <li className="pizza">
      <img src={path} alt={`Pizza ${name}`} />
      <div>
        <h3> {`Pizza ${name}`} </h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </li>
  );
}
