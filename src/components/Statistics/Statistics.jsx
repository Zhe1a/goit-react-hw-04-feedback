import PropTypes from 'prop-types';
import s from "./Statistics.module.css"
function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
      <div className={s.Statistics}>
        <ul className={s["Statistics__list"]}>
          <li className={s["Statistics__item"]}>Good <p>{good}</p></li>
          <li className={s["Statistics__item"]}>Neutral <p>{neutral}</p></li>
          <li className={s["Statistics__item"]}>Bad <p>{bad}</p></li>
          <li className={s["Statistics__item"]}>Total<p>{total}</p></li>
          <li className={s["Statistics__item"]}>Positive feedback<p>{positivePercentage} %</p></li>
        </ul>
      </div>
    );
  }
  Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
  export default Statistics;

 