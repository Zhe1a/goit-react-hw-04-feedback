import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css"
function FeedbackOptions({ options, onLeaveFeedback }) {

  return options.map(el => {
   return <button className={s["feedback__button"]} type="button" key={el} onClick={() => onLeaveFeedback(el)}>
      {el}
    </button>;
  });
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
