import React, { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import "./ForumPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const sampleQueries = [
  {
    id: 1,
    title: "AI vs Machine Learning",
    description:
      "What are the key differences between AI and Machine Learning? Can someone break it down in simple terms?",
    username: "TechSavvy99",
    topics: ["Technology", "AI/ML"],
    comments: [],
  },
  {
    id: 2,
    title: "Best Python Libraries for Visualization",
    description:
      "I'm new to Python. What are the best libraries for data visualization?",
    username: "CodeJunkie42",
    topics: ["Programming", "Data Science"],
    comments: [],
  },
  {
    id: 3,
    title: "Home Remedies for Migraines",
    description:
      "What are the most effective home remedies for relieving migraines?",
    username: "HealthGuruX",
    topics: ["Health", "Wellness"],
    comments: [],
  },
  {
    id: 4,
    title: "Real Estate Investment in 2024",
    description:
      "Is now a good time to invest in real estate, or should I wait for a market correction?",
    username: "InvestorMind",
    topics: ["Finance", "Real Estate"],
    comments: [],
  },
  {
    id: 5,
    title: "Must-Play Indie Games",
    description: "What are some must-play indie games of 2024?",
    username: "GamerXtreme",
    topics: ["Gaming", "Entertainment"],
    comments: [],
  },
  {
    id: 6,
    title: "Budget Travel in Europe",
    description:
      "Looking for budget-friendly travel destinations in Europe. Any recommendations?",
    username: "TravelBug123",
    topics: ["Travel", "Budgeting"],
    comments: [],
  },
  {
    id: 7,
    title: "Easy Fusion Recipes",
    description:
      "What are some unique but easy-to-make fusion recipes for a dinner party?",
    username: "ChefMaster77",
    topics: ["Food", "Cooking"],
    comments: [],
  },
  {
    id: 8,
    title: "Performance Mods for Mustang",
    description: "What are the best performance mods for a stock Ford Mustang?",
    username: "CarEnthusiast55",
    topics: ["Automobiles", "Engineering"],
    comments: [],
  },
  {
    id: 9,
    title: "Underrated Sci-Fi Movies",
    description:
      "Can someone suggest underrated sci-fi movies that deserve more attention?",
    username: "MovieBuff21",
    topics: ["Movies", "Entertainment"],
    comments: [],
  },
  {
    id: 10,
    title: "Core Strength Without Equipment",
    description:
      "What are the best exercises for building core strength without equipment?",
    username: "FitnessFreakX",
    topics: ["Fitness", "Health"],
    comments: [],
  },
  {
    id: 11,
    title: "Challenges in SaaS Startups",
    description:
      "What are the key challenges of launching a SaaS startup in 2025?",
    username: "StartupWizard",
    topics: ["Business", "Technology", "Startups"],
    comments: [],
  },
  {
    id: 12,
    title: "How Do Black Holes Evaporate?",
    description:
      "How do black holes actually ‘evaporate’ according to Hawking radiation?",
    username: "AstroGeek99",
    topics: ["Science", "Space"],
    comments: [],
  },
  {
    id: 13,
    title: "FAANG Coding Interview Prep",
    description:
      "What are the best coding interview prep resources for FAANG companies?",
    username: "CodeJunkie42",
    topics: ["Programming", "Career"],
    comments: [],
  },
  {
    id: 14,
    title: "ETFs vs Mutual Funds",
    description:
      "How do ETFs compare to mutual funds in terms of long-term growth?",
    username: "InvestorMind",
    topics: ["Finance", "Investment"],
    comments: [],
  },
  {
    id: 15,
    title: "Quantum Computing and Cybersecurity",
    description:
      "Is quantum computing just hype, or will it really revolutionize cybersecurity?",
    username: "TechSavvy99",
    topics: ["Technology", "Cybersecurity"],
    comments: [],
  },
];

const ForumPage = ({ loggedInUsername, searchQuery }) => {
  const [posts, setPosts] = useState(sampleQueries);
  const [selectedPost, setSelectedPost] = useState(null);
  const [trendingTopics, setTrendingTopics] = useState([
    "Technology",
    "Entertainment",
    "Health",
    "Finance",
    "Data Science",
  ]);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    updateTopics();
  }, [posts]);

  const updateTopics = () => {
    const allTopicsArray = posts.flatMap((post) => post.topics);
    const uniqueTopics = [...new Set(allTopicsArray)];
    setAllTopics(uniqueTopics);

    const topicFrequency = allTopicsArray.reduce((acc, topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
      return acc;
    }, {});

    const sortedTopics = Object.keys(topicFrequency).sort(
      (a, b) => topicFrequency[b] - topicFrequency[a]
    );

    setTrendingTopics(sortedTopics.slice(0, 5));
  };

  const addPost = (title, description, topics) => {
    const username = loggedInUsername || "Anonymous";
    const newPost = {
      id: posts.length + 1,
      title,
      description,
      username,
      topics,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackToForum = () => {
    setSelectedPost(null);
  };

  const handleHomeClick = () => {
    setSelectedPost(null);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.topics.some((topic) =>
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="form-container">
      <div className="left-column">
        <div className="d-flex flex-column">
          <button className="btn btn-tile mb-2" onClick={handleHomeClick}>
            Home
          </button>
          <div className="dropdown mb-2">
            <button
              className="btn btn-tile dropdown-toggle w-100"
              data-bs-toggle="dropdown"
            >
              Trending
            </button>
            <div className="dropdown-menu w-100">
              {trendingTopics.map((topic, index) => (
                <a key={index} className="dropdown-item text-danger" href="#">
                  {topic}
                </a>
              ))}
            </div>
          </div>
          <div className="dropdown w-100">
            <button
              className="btn btn-tile dropdown-toggle w-100"
              data-bs-toggle="dropdown"
            >
              Topics
            </button>
            <ul className="dropdown-menu w-100">
              {allTopics.map((topic, index) => (
                <li key={index}>
                  <a className="dropdown-item text-danger" href="#">
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="middle-column">
        {selectedPost ? (
          <PostDetail
            post={selectedPost}
            onBack={handleBackToForum}
            loggedInUsername={loggedInUsername}
          />
        ) : (
          <div className="list-posts">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="list-posts-item"
                onClick={() => handlePostClick(post)}
              >
                <div className="profile-picture">
                  <img
                    src="https://i.postimg.cc/SsCPqZt7/default-avatar-photo-placeholder-profile-icon-vector-21666259.avif"
                    alt="Profile"
                  />
                </div>
                <div className="profile-info">
                  <h5 className="mb-1 text-danger">{post.title}</h5>
                  <div className="topics">
                    {post.topics.map((topic, index) => (
                      <span key={index} className="badge bg-danger me-1">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <p className="text-white">{post.description}</p>
                  <div className="profile-username">
                    <p>Asked by: {post.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="right-column">
        <h3 className="text-danger">Ask your query</h3>
        <PostForm addPost={addPost} loggedInUsername={loggedInUsername} />
      </div>
    </div>
  );
};

const PostForm = ({ addPost, loggedInUsername }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topics, setTopics] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const topicsArray = topics.split(",").map((topic) => topic.trim());
    addPost(title, description, topicsArray);
    setTitle("");
    setDescription("");
    setTopics("");
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control bg-dark text-white border-danger"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control bg-dark text-white border-danger"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control bg-dark text-white border-danger"
          placeholder="Topics (comma separated)"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Add Post
      </button>
    </form>
  );
};

export default ForumPage;
