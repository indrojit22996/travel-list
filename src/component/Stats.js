export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some item for your packing list🚀.</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! rady to go✈️"
          : `You have ${numItems} item on youe list, and you alradey pack ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
