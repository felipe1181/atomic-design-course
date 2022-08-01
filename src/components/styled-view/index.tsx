import React from 'react';
import {View, ViewProps} from 'react-native';

const StyledView: React.FC<ViewProps> = ({children, ...rest}) => {
  return <View {...rest}>{children}</View>;
};

export default StyledView;
