import React from 'react';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      content: 'React is a powerful JavaScript library for building user interfaces. It makes development fun and efficient!',
      author: 'Jane Doe',
    },
    {
      id: 2,
      title: 'Understanding State and Props',
      content: 'State and props are fundamental concepts in React. State is mutable, while props are used to pass data.',
      author: 'John Smith',
    },
    {
      id: 3,
      title: 'Why Choose React?',
      content: 'React’s component-based architecture allows developers to reuse code and create scalable applications.',
      author: 'Admin',
    },
    {
      id: 4,
      title: 'React vs. Angular',
      content: 'React offers flexibility, while Angular provides a complete framework. Both have their own strengths.',
      author: 'Dev Talk',
    },
    {
      id: 5,
      title: 'Building a To-Do App with React',
      content: 'A To-Do app is a great way to learn React. Start with functional components and manage state effectively.',
      author: 'Learner',
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id} >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>By <strong>{post.author}</strong></small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
