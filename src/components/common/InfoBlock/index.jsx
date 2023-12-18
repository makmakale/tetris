import { InfoBlockContainer, InfoBlockTitle, InfoBlockValue } from '@/styles/GameStatus';
import PropTypes from 'prop-types';

function InfoBlock({ title, value, children }) {
  return (
    <InfoBlockContainer>
      {title ? <InfoBlockTitle>{title}</InfoBlockTitle> : null}
      {value ? <InfoBlockValue>{value}</InfoBlockValue> : null}
      {children}
    </InfoBlockContainer>
  );
}

InfoBlock.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

InfoBlock.defaultProps = {
  title: null,
  value: null,
  children: null,
};

export default InfoBlock;
