import "./style.scss";

export const Count = ({
  propertyCount,
  propertyPlus,
  propertyMinus,
  propertyId,
  propertyChangeValue,
}) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={propertyCount}
          onChange={(e) => {
            propertyChangeValue(propertyId, +e.target.value);
          }}
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            propertyPlus(propertyId);
          }}
        >
          <img src="./img/icons/icon-up.svg" alt="Increase" />
        </button>
        <button
          type="button"
          className="count__down"
          onClick={() => {
            propertyMinus(propertyId);
          }}
        >
          <img src="./img/icons/icon-down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  );
};
