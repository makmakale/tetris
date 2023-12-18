import { StyledCell } from '@/styles/Cell';
import PropTypes from 'prop-types';
import { memo } from 'react';

function Cell({ type }) {
  return (
    <StyledCell type={type} className={type || 'Empty'} />
  );
}

Cell.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default memo(Cell);
