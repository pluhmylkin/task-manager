import React from 'react';
import { string, func, bool } from 'prop-types';
import Style from './style';

const propTypes = {
  title: string.isRequired,
  onClick: func,
  disabled: bool
};

const defaultProps = {
  onClick: () => {},
  disabled: false,
};

const BaseButton = ({ title, onClick, disabled }) => (
  <Style disabled={disabled} onClick={onClick}>
    {title}
  </Style>
);

BaseButton.propTypes = propTypes;
BaseButton.defaultProps = defaultProps;

export default BaseButton;
