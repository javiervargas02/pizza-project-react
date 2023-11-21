export default function Header() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && (
        <>
          <p>We're open until {openHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </>
      )}
    </footer>
  );
}
