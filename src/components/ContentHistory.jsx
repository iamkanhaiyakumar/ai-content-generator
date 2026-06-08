import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContentHistory.css';

const ContentHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div className="content-history-empty">
        <div className="empty-state-illustration">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="20"
              y="10"
              width="80"
              height="100"
              rx="8"
              fill="#E8F0FE"
              stroke="#1A73E8"
              strokeWidth="2"
            />
            <line
              x1="35"
              y1="40"
              x2="85"
              y2="40"
              stroke="#1A73E8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="35"
              y1="55"
              x2="70"
              y2="55"
              stroke="#1A73E8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="35"
              y1="70"
              x2="60"
              y2="70"
              stroke="#1A73E8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="85" cy="85" r="20" fill="#1A73E8" />
            <line
              x1="85"
              y1="77"
              x2="85"
              y2="93"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="77"
              y1="85"
              x2="93"
              y2="85"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="empty-state-title">No Content Generated Yet</h2>
        <p className="empty-state-description">
          Start creating amazing content with our AI-powered generator.
          Generate blog posts, social media updates, marketing copy, and more
          in just a few clicks.
        </p>
        <Link to="/generate" className="empty-state-cta">
          Generate Your First Content
        </Link>
      </div>
    );
  }

  return (
    <div className="content-history">
      <h2 className="history-title">Content History</h2>
      <div className="history-list">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <div className="history-item-header">
              <span className="history-item-type">{item.type}</span>
              <span className="history-item-date">{item.date}</span>
            </div>
            <p className="history-item-preview">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentHistory;