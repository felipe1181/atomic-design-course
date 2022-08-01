import React from 'react';
import {ImageBackground as ImageBg, ImageBackgroundProps} from 'react-native';

const ImageBackground: React.FC<ImageBackgroundProps> = ({
  children,
  ...rest
}) => {
  return <ImageBg {...rest}>{children}</ImageBg>;
};

export default ImageBackground;
