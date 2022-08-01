import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

const Typography: React.FC<TextProps & {variant: 'Heading' | 'Paragraph'}> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <Text style={[styles[variant as keyof typeof styles]]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  Paragraph: {
    fontSize: 12,
    textAlign: 'left',
    fontWeight: 'normal',
  },
});
export default Typography;
