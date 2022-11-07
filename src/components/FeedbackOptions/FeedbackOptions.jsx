import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
function FeedbackOptions({ options, onClick }) {
  return options.map(el => {
    return (
      <button
        className={s['feedback__button']}
        type="button"
        key={el}
        name={el}
        onClick={(e)=>{onClick(e)}}
      >
        {el}
      </button>
    );
  });
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;
