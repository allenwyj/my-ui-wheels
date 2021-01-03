import React from 'react';
import './importIcons';
import './icon.styles.scss';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="sui-icon">
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
