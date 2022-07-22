function GenButtons({
  getGen1,
  getGen2,
  getGen3,
  getGen4,
  getGen5,
  getGen6,
  getGen7,
  getGen8,
}) {
  return (
    <div className="gen-buttons">
      <button className="gen1" onClick={() => getGen1()}>
        Generation 1
      </button>
      <button className="gen2" onClick={() => getGen2()}>
        Generation 2
      </button>
      <button className="gen3" onClick={() => getGen3()}>
        Generation 3
      </button>
      <button className="gen4" onClick={() => getGen4()}>
        Generation 4
      </button>
      <button className="gen5" onClick={() => getGen5()}>
        Generation 5
      </button>
      <button className="gen6" onClick={() => getGen6()}>
        Generation 6
      </button>
      <button className="gen7" onClick={() => getGen7()}>
        Generation 7
      </button>
      <button className="gen8" onClick={() => getGen8()}>
        Generation 8
      </button>
    </div>
  );
}
export default GenButtons;
