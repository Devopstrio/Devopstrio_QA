import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './TechStack.css';

const TechStack = ({ title, subtitle, data }) => {
    // If no data passed, use a default set (the one from Webdevelopment)
    const technologyData = data || {
        'Popular': [
            { name: 'iOS', icon: 'https://cdn.simpleicons.org/apple/white' },
            { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }
        ],
        'Mobile': [
            { name: 'iOS', icon: 'https://cdn.simpleicons.org/apple/white' },
            { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Xamarin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' }
        ],
        'Front-end': [
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
            { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
        ],
        'Back-end': [
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
        ],
        'Database': [
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
            { name: 'MS Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            { name: 'MS SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' }
        ],
        'Cloud': [
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' }
        ],
        'CMS': [
            { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
            { name: 'Drupal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg' }
        ]
    };

    const categories = Object.keys(technologyData);
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <section className="dt-tech-stack-section">
            <div className="dt-tech-stack-container">
                <div className="dt-tech-stack-header">
                    <h2 className="dt-tech-stack-h2">{title || "Technologies for Web Development"}</h2>
                    <p className="dt-tech-stack-p">{subtitle || "Here is what we can apply to realize your plans for Custom Web Development."}</p>
                </div>

                {/* Category Tabs */}
                <div className="dt-tech-stack-tabs">
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            className={`dt-tech-stack-tab-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className="dt-tech-stack-display">
                    <button className="dt-tech-stack-nav prev"><FiChevronLeft /></button>
                    <div className="dt-tech-stack-grid">
                        {technologyData[activeTab].map((tech, i) => (
                            <div key={i} className="dt-tech-stack-card">
                                <div className="dt-tech-stack-icon">
                                    <img src={tech.icon} alt={tech.name} />
                                </div>
                                <span className="dt-tech-stack-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    <button className="dt-tech-stack-nav next"><FiChevronRight /></button>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
