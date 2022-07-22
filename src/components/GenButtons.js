function GenButtons({ getGen }) {
  return (
    <div className="gen-buttons">
      <button onClick={() => getGen(1)}>Generation 1</button>
      <button onClick={() => getGen(2)}>Generation 2</button>
      <button onClick={() => getGen(3)}>Generation 3</button>
      <button onClick={() => getGen(4)}>Generation 4</button>
      <button onClick={() => getGen(5)}>Generation 5</button>
      <button onClick={() => getGen(6)}>Generation 6</button>
      <button onClick={() => getGen(7)}>Generation 7</button>
      <button onClick={() => getGen(8)}>Generation 8</button>
    </div>
  );
}
export default GenButtons;
