"use client"

import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

interface Post {
  id: number;
  user: string;
  content: string;
  image?: string;
}

const posts: Post[] = [
  { id: 1, user: 'John Doe', content: 'Hello World!', image: 'https://via.placeholder.com/150' },
  { id: 2, user: 'Jane Smith', content: 'React is awesome!', image: 'https://via.placeholder.com/150' },
  // Add more posts as needed
];

const PostCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  width: 100%;
  max-width: 600px;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const PostContent = styled.div`
  margin-top: 8px;
`;

const NewsFeed: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmartWatch = useMediaQuery({ maxWidth: 320 });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {posts.map(post => (
        <PostCard key={post.id}>
          <h2>{post.user}</h2>
          <PostContent>{post.content}</PostContent>
          {post.image && <PostImage src={post.image} alt={post.user} />}
        </PostCard>
      ))}
    </div>
  );
};

export default NewsFeed;
