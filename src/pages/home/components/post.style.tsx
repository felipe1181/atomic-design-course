import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {StyledView, Typography} from '../../../components';

export interface Post {
  id: number;
  title: string;
  author: string;
  description: string;
}

const PostTitle: React.FC<{children: string}> = ({children}) => {
  return (
    <Typography variant="Heading" style={styles.postTitle}>
      {children}
    </Typography>
  );
};

const PostAuthor: React.FC<{children: string}> = ({children}) => {
  return (
    <Typography variant="Heading" style={styles.postAuthor}>
      {children}
    </Typography>
  );
};
const PostDescription: React.FC<{children: string}> = ({children}) => {
  return (
    <Typography variant="Paragraph" style={styles.postDescription}>
      {children}
    </Typography>
  );
};

export const PostItem: React.FC<Post> = memo(({title, author, description}) => {
  return (
    <StyledView style={styles.postCard}>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>{author}</PostAuthor>
      <PostDescription>{description}</PostDescription>
    </StyledView>
  );
});

const styles = StyleSheet.create({
  postCard: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'flex-start',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  postAuthor: {
    fontSize: 14,
  },
  postDescription: {
    fontSize: 12,
    marginVertical: 10,
  },
});
