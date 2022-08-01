import React from 'react';
import {FlatList} from 'react-native';
import api from '../../../api';
import {PostItem} from './post.style';

const Post: React.FC<{data: typeof api}> = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <PostItem {...item} />}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Post;
