'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Home() {
  const [menuChecked, setMenuChecked] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [moreActive, setMoreActive] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleViewCv = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      e.preventDefault();
      setIsCvModalOpen(true);
    }
  };

  // Handle system and saved themes on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Handle scroll events for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-driven animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const animElements = document.querySelectorAll('.reveal-element, .slide-in-left, .slide-in-right');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setMenuChecked(!menuChecked);
  };

  const handleLinkClick = () => {
    setMenuChecked(false);
    setMoreActive(false);
  };

  const toggleMoreDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMoreActive(!moreActive);
    }
  };

  // Divide skills into two specific columns for the layout
  const leftSkills = [portfolioData.skills[0], portfolioData.skills[2], portfolioData.skills[4]];
  const rightSkills = [portfolioData.skills[1], portfolioData.skills[3], portfolioData.skills[5], portfolioData.skills[6]];

  return (
    <div className="App">
      {/* Sticky Header / Navigation */}
      <div className="header-wrapper" id="home">
        <header className="header">
          <a href="#home" className="logo" onClick={handleLinkClick}>
            <span className="logo-name">{portfolioData.fullName}</span>
          </a>
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            checked={menuChecked}
            onChange={toggleMenu}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#about" onClick={handleLinkClick}>
                <i className="fas fa-user menu-item-icon" aria-hidden="true"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#experience" onClick={handleLinkClick}>
                <i className="fas fa-briefcase menu-item-icon" aria-hidden="true"></i>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick}>
                <i className="fas fa-folder-open menu-item-icon" aria-hidden="true"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick}>
                <i className="fas fa-tools menu-item-icon" aria-hidden="true"></i>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#achievements" onClick={handleLinkClick}>
                <i className="fas fa-trophy menu-item-icon" aria-hidden="true"></i>
                <span>Achievements</span>
              </a>
            </li>
            <li className={`more ${moreActive ? 'active' : ''}`}>
              <a href="#more" className="more-toggle" onClick={toggleMoreDropdown}>
                <span>More</span>
                <i className="fas fa-chevron-down menu-item-icon dropdown-icon" aria-hidden="true"></i>
              </a>
              <ul className="more-menu">
                <li>
                  <a href="#blogs" onClick={handleLinkClick}>
                    <i className="fas fa-blog menu-item-icon" aria-hidden="true"></i>
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <a href="#education" onClick={handleLinkClick}>
                    <i className="fas fa-graduation-cap menu-item-icon" aria-hidden="true"></i>
                    <span>Education</span>
                  </a>
                </li>
                <li>
                  <a href="#leadership" onClick={handleLinkClick}>
                    <i className="fas fa-users-cog menu-item-icon" aria-hidden="true"></i>
                    <span>Leadership</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleLinkClick}>
                    <i className="fas fa-envelope menu-item-icon" aria-hidden="true"></i>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Theme">
                <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span className="mobile-only-inline">Toggle Theme</span>
              </button>
            </li>
          </ul>
        </header>
      </div>

      {/* Main Container */}
      <main className="main">
        
        {/* Hero Section */}
        <section className="greeting-main" id="greeting">
          <div className="greeting-text-div">
            <h1 className="greeting-text">
              Hi, I'm {portfolioData.name} <span className="wave-emoji">👋</span>
            </h1>
            <div className="greeting-text-p">
              <p className="professional-line" dangerouslySetInnerHTML={{ __html: portfolioData.professionalLine }}></p>
              <div className="subtitle-divider"></div>
              <p className="achievements-line" dangerouslySetInnerHTML={{ __html: portfolioData.achievementsLine }}></p>
            </div>
            
            <div className="social-media-wrapper">
              <div className="social-media-div">
                <a href={portfolioData.github} className="icon-button github" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href={portfolioData.linkedin} className="icon-button linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={`mailto:${portfolioData.email}`} className="icon-button google" target="_blank" rel="noopener noreferrer" title="Gmail">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="button-greeting-div">
              <a className="main-button" href="#contact">Contact me</a>
              <a className="main-button" href={portfolioData.resumeUrl} onClick={handleViewCv} target="_blank" rel="noopener noreferrer">View CV</a>
            </div>
          </div>

          <div className="greeting-image-div">
            <img src={portfolioData.profilePicUrl} alt={portfolioData.fullName} className="profile-image" />
          </div>
        </section>

        {/* About Me Section */}
        <section className="section-container reveal-element" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="underline-title"></div>
          <p className="about-me-text">
            {portfolioData.aboutMe}
          </p>
          <ul className="about-me-bullets">
            <li className="about-me-bullet">
              <i className="fas fa-university"></i>
              <span>Studying CSE at BUET</span>
            </li>
            <li className="about-me-bullet">
              <i className="fas fa-brain"></i>
              <span>AI/ML & Backend Specialist</span>
            </li>
            <li className="about-me-bullet">
              <i className="fas fa-rocket"></i>
              <span>Founder, Somokolon Labs</span>
            </li>
          </ul>
        </section>

        {/* Work Experience Section */}
        <section className="section-container reveal-element" id="experience">
          <h2 className="section-title">Work Experience</h2>
          <div className="professional-experience-cards-div">
            {portfolioData.experiences.map((exp, index) => (
              <div className="professional-experience-card-dark" key={index}>
                <div className="company-header">
                  <div className="company-info">
                    <img className="company-logo" src={exp.logo} alt={exp.company} />
                    <div className="company-details">
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="overall-title">{exp.roles[0]?.title}</p>
                      <p className="company-duration">
                        <i className="fas fa-calendar-alt"></i>
                        {exp.duration}
                      </p>
                      <p className="company-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="roles-container">
                  {exp.roles.map((role, rIndex) => (
                    <div className="role-item" key={rIndex}>
                      <div className="role-header">
                        <h4 className="role-title">{role.title}</h4>
                        <div className="role-duration-text">
                          <i className="fas fa-calendar-alt"></i>
                          {role.duration}
                        </div>
                      </div>
                      <ul className="bullet-points-list">
                        {role.bullets.map((bullet, bIndex) => (
                          <li
                            className="bullet-point"
                            key={bIndex}
                            dangerouslySetInnerHTML={{
                              __html: bullet.replace(/\*\*(.*?)\*\*/g, '<span class="bullet-highlight">$1</span>')
                            }}
                          ></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="company-links">
                  <a href={exp.website} target="_blank" rel="noopener noreferrer" className="company-link">
                    <i className="fas fa-globe"></i>
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-container reveal-element" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="project-cards-div">
            {portfolioData.projects.map((proj, index) => (
              <div className="project-card reveal-element" key={index}>
                <div className="project-image-div">
                  <i className={proj.icon + " project-card-icon"}></i>
                </div>
                <div className="project-detail-div">
                  <div className="project-main-content">
                    <h5 className="project-card-title">{proj.title}</h5>
                    <p className="project-card-desc">{proj.description}</p>
                  </div>
                  
                  {proj.stats && (
                    <div className="project-stats-row">
                      {proj.stats.map((s, sIdx) => (
                        <span className="project-stat-item" key={sIdx}>
                          <i className={s.icon}></i> {s.label}: {s.value}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-bottom-content">
                    <div className="project-technologies">
                      {proj.tech.map((t, tIndex) => (
                        <span className="tech-tag" key={tIndex}>{t}</span>
                      ))}
                    </div>
                    
                    <div className="project-links-row">
                      {proj.links.map((l, lIdx) => (
                        <a href={l.url} key={lIdx} target="_blank" rel="noopener noreferrer" className="project-btn">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-container reveal-element" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-columns-container">
            <div className="skills-main-column">
              {leftSkills.map((skillGroup, index) => (
                <div className="skills-column reveal-element" key={index}>
                  <h3 className="skills-column-title">
                    <i className={skillGroup.icon}></i>
                    {skillGroup.category}
                  </h3>
                  <div className="skills-list">
                    {skillGroup.items.map((skill, sIndex) => (
                      <span className="skills-tag" key={sIndex}>
                        {skill.icon && <i className={skill.icon}></i>}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-main-column">
              {rightSkills.map((skillGroup, index) => (
                <div className="skills-column reveal-element" key={index}>
                  <h3 className="skills-column-title">
                    <i className={skillGroup.icon}></i>
                    {skillGroup.category}
                  </h3>
                  <div className="skills-list">
                    {skillGroup.items.map((skill, sIndex) => (
                      <span className="skills-tag" key={sIndex}>
                        {skill.icon && <i className={skill.icon}></i>}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-container reveal-element" id="achievements">
          <h2 className="section-title">Achievements 🏆</h2>
          <div className="achievement-cards-div">
            {portfolioData.achievements.map((ach, index) => (
              <div className="certificate-card reveal-element" key={index}>
                {ach.logo && (
                  <div className="certificate-image-div">
                    <img src={ach.logo} className="card-image" alt={ach.title} />
                  </div>
                )}
                <div className="certificate-detail-div">
                  <h5 className="card-title">{ach.title}</h5>
                  <p className="card-subtitle">{ach.subtitle}</p>
                </div>
                {ach.tags && (
                  <div className="certificate-card-footer">
                    {ach.tags.map((tag, tIndex) => (
                      <span className="certificate-tag" key={tIndex}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section className="section-container reveal-element" id="blogs">
          <h2 className="section-title">Blogs ✍️</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-muted)' }}>
            I write about machine learning, C++ backend optimizations, and full-stack development
          </p>
          <div className="blogs-cards-div">
            {portfolioData.blogs.map((blog, index) => (
              <a 
                href={blog.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-card-link" 
                key={index}
              >
                <div className="blog-card reveal-element">
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                  <h5 className="blog-card-title">{blog.title}</h5>
                  <p className="blog-card-desc">{blog.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="section-container reveal-element" id="education">
          <h2 className="section-title">Education</h2>
          <div className="education-card-container">
            {portfolioData.education.map((edu, index) => (
              <div 
                className={`education-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`} 
                key={index}
              >
                <div className="education-logo-wrapper">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.school} />
                  ) : (
                    <i className="fas fa-graduation-cap"></i>
                  )}
                </div>
                <div className="education-card-right">
                  <h3 className="education-text-school">{edu.school}</h3>
                  <p className="education-text-subHeader">{edu.degree}</p>
                  <p className="education-text-duration">
                    <i className="fas fa-calendar-alt"></i>
                    {edu.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section-container reveal-element" id="leadership">
          <h2 className="section-title">Leadership & Volunteer Experience</h2>
          {portfolioData.leadershipLine !== undefined && (
            <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-muted)' }}>
              {portfolioData.leadershipLine}
            </p>
          )}
          <div className="leadership-cards-div">
            {portfolioData.leadership.map((lead, index) => (
              <div className="leadership-card reveal-element" key={index}>
                <h3 className="leadership-card-title">{lead.role}</h3>
                <p className="leadership-card-org">{lead.organization}</p>
                {lead.duration && (
                  <div className="leadership-card-duration">
                    <i className="fas fa-calendar-alt"></i>
                    {lead.duration}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Me Section */}
        <section className="section-container reveal-element" id="contact">
          <div className="contact-flex-container">
            <div className="contact-left-side">
              <h2 className="contact-title">Get In Touch ✉️</h2>
              <p className="contact-subtitle">
                If you want to hire me, collaborate on AI/ML projects, or have other questions, drop me a message anytime!
              </p>
              <a href={`mailto:${portfolioData.email}`} className="contact-detail-email">
                {portfolioData.email}
              </a>
              <div className="contact-social-grid">
                <a href={portfolioData.github} className="contact-btn github" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                <a href={portfolioData.linkedin} className="contact-btn linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                  LinkedIn
                </a>
                <a href={`mailto:${portfolioData.email}`} className="contact-btn gmail">
                  <i className="fas fa-envelope"></i>
                  Gmail
                </a>
                <a href="#blogs" className="contact-btn blog">
                  <i className="fas fa-blog"></i>
                  Blogs
                </a>
                <a href="https://somokolonlabs.com" className="contact-btn academy" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-university"></i>
                  Academy
                </a>
              </div>
            </div>
            
            <div className="contact-right-side">
              <div className="floating-envelope">
                <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="3" fill="rgba(143, 26, 26, 0.04)" stroke="var(--primary-color)" strokeWidth="1.2" />
                  <path d="M22 7L13.03 12.7C12.4 13.1 11.6 13.1 10.97 12.7L2 7" stroke="var(--primary-color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L7.5 12.5" stroke="var(--primary-color)" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M22 17L16.5 12.5" stroke="var(--primary-color)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Anime Quote Section */}
      <div className="anime-quote-container reveal-element">
        <p className="anime-quote">"{portfolioData.quote.text}"</p>
        <p className="anime-author">
          — {portfolioData.quote.author} {portfolioData.quote.anime && `(${portfolioData.quote.anime})`}
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        id="topButton"
        className={showTopBtn ? 'visible' : ''}
        onClick={scrollToTop}
        title="Go to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* CV Modal overlay */}
      {isCvModalOpen && (
        <div className="cv-modal-overlay" onClick={() => setIsCvModalOpen(false)}>
          <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <h3>Curriculum Vitae</h3>
              <div className="cv-modal-actions">
                <a href={portfolioData.resumeUrl} download className="cv-modal-btn download-btn">
                  <i className="fas fa-download"></i> Download
                </a>
                <button className="cv-modal-btn close-btn" onClick={() => setIsCvModalOpen(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="cv-modal-body">
              <iframe src={portfolioData.resumeUrl} width="100%" height="100%" title="CV Viewer"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
