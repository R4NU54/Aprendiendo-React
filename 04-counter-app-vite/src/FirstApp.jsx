import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <div>
      <h1 data-testid='test-title'> {title} </h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </div>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  title: 'Titulo vacio',
  subTitle: 'Subtitulo vacio',
  name: 'Raúl Núñez',
};
