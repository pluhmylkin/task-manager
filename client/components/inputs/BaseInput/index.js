import React from 'react';
import { string, func, bool } from 'prop-types';
import Style from './style';

const propTypes = {
  placeholder: string,
  onChange: func,
  disabled: bool,
  type: string,
  value: string,
};

const defaultProps = {
  onChange: () => {},
  disabled: false,
  placeholder: '',
  type: 'text',
  value: '',
};

const BaseInput = props => <Style {...props} />;

BaseInput.propTypes = propTypes;
BaseInput.defaultProps = defaultProps;

export default BaseInput;
