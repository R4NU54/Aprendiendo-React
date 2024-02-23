/* eslint-disable react/prop-types */
export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <img src={sprites.front_default} alt={name} style={{ width: 100 }} />
    </section>
  );
};
