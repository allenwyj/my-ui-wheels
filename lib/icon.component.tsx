import React from 'react';
import './importIcons';
import './icon.styles.scss';

interface IconProps {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="sui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
