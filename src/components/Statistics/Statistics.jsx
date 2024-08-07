import { StatisticsTitle, StatisticsList, ListItem } from './Statistics.styled';
import { randomHexColor } from 'constants/getRandomHexColor';
import PropTypes, { shape } from 'prop-types';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? (
        <StatisticsTitle>{title}</StatisticsTitle>
      ) : (
        <StatisticsTitle className="title">Upload stats</StatisticsTitle>
      )}

      <StatisticsList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} bgColor={`#${randomHexColor()}`}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </ListItem>
          );
        })}
      </StatisticsList>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: shape({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
