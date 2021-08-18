import PropTypes from 'prop-types';
import s from './Statistic.module.css';

function Statistic(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.name}>Good: {good}</p>
      </li>
      <li className={s.item}>
        <p className={s.name}>Neutral: {neutral}</p>
      </li>
      <li className={s.item}>
        <p className={s.name}>Bad: {bad}</p>
      </li>
      <li className={s.item}>
        <p className={s.name}>Total: {total}</p>
      </li>
      <li className={s.item}>
        <p className={s.name}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
