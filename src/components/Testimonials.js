import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials scroll-reveal" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Users Are Saying</h2>
        <p className="section-subtitle">Join millions of satisfied users who have transformed their daily workflows with Zara AI</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-text">
              Zara AI has completely transformed how I approach my research projects. The ability to analyze complex documents and get intelligent insights in seconds is incredible. It's like having a research assistant available 24/7.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">DR</div>
              <div className="author-info">
                <h4>Dr. Rachel Martinez</h4>
                <p>Research Scientist, Stanford University</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              As a content creator, I was skeptical about AI assistance. But Zara AI doesn't replace creativity - it enhances it. The brainstorming sessions and creative suggestions have taken my work to the next level.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">MK</div>
              <div className="author-info">
                <h4>Marcus Kim</h4>
                <p>Creative Director & YouTuber</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              The multilingual capabilities are outstanding. I work with international clients daily, and Zara AI helps me communicate effectively across language barriers while maintaining professional tone and context.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">AL</div>
              <div className="author-info">
                <h4>Ana López</h4>
                <p>International Business Consultant</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              I use Zara AI for everything from debugging code to explaining complex algorithms to my team. It's incredibly accurate and saves me hours of research time every week. Absolutely indispensable for developers.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div className="author-info">
                <h4>James Sullivan</h4>
                <p>Senior Software Engineer, Tech Startup</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              The image analysis feature is phenomenal. I can upload screenshots of data visualizations and get detailed insights instantly. It's revolutionized how I prepare client presentations and reports.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">PT</div>
              <div className="author-info">
                <h4>Priya Thakur</h4>
                <p>Data Analyst, Fortune 500 Company</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              As an educator, I love how Zara AI adapts its explanations to different learning styles. My students find it incredibly helpful for homework assistance and concept clarification. It's like having a personal tutor.
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">TW</div>
              <div className="author-info">
                <h4>Thomas Wright</h4>
                <p>High School Mathematics Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
