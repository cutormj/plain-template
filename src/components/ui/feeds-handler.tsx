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
  { id: 2, user: 'Jane Smith', content: 'React is awesome!', image: 'https://via.placeholder.com/150' },
  // Add more posts as needed
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 80px;
  background-color: #fff; /* Changed to blue */
  
  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile phones */
  }

  @media (max-width: 320px) {
    width: 100%; /* Full width on smartwatches */
  }

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1224px) {
    justify-content: center;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    justify-content: center; /* Center content on iPad Pro */
  }

  @media (min-width: 1824px) {
    justify-content: center;
  }


`;

const PostCard = styled.div`
  background: #fff; /* Changed to red */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1px;
  padding: 16px;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px 0 16px  0;
  }

  @media (max-width: 320px) {
    max-width: 100%;
    padding: 16px 0 16px  0;
  }
`;

const PostImage = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile phones */
  }

  @media (max-width: 320px) {
    width: 100%; /* Full width on smartwatches */
  }
`;

const PostUser = styled.div`
    @media (max-width: 375px) {
        padding-left: 16px;
    }

    @media (max-width: 414px) {
        padding-left: 16px;
    }
`;

const PostContent = styled.div`
  margin-top: 8px;
  padding: 16px;
`;

const NewsFeed: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmartWatch = useMediaQuery({ maxWidth: 320 });

  return (
    <Container>
      {posts.map(post => (
        <PostCard key={post.id}>
          <PostUser><h2>{post.user}</h2></PostUser>
          <PostContent>{post.content}</PostContent>
          {post.image && <PostImage src={post.image} alt={post.user} />}
        </PostCard>
      ))}
    </Container>
  );
};

export default NewsFeed;
