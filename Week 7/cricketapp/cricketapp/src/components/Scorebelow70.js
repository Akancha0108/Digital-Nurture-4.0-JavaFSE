export default function Scorebelow70({ players }) {
  const players70 = [];
  players.map(item => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      {players70.map((item, index) => (
        <div key={index}>
          <li>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        </div>
      ))}
    </div>
  );
}
