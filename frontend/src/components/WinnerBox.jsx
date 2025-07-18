const WinnerBox = ({ winners }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
    {winners.map((w, i) => (
      <div key={i} className="p-4 bg-yellow-100 border rounded shadow text-center">
        <h2 className="text-lg font-bold">{`#${i + 1} ${w.name}`}</h2>
        <p>{w.totalPoints} points</p>
      </div>
    ))}
  </div>
);

export default WinnerBox;
