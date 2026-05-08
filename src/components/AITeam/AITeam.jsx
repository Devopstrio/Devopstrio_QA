import { FiCalendar } from 'react-icons/fi';
import './AITeam.css';

// Images
import Saga_Img from "../../assets/images/Colleague/Saga_2.png";
import Maxim_Img from "../../assets/images/Colleague/maresh4.png";

const teamData = {
    consulting: [
        {
            name: "SagaDevan",
            role: "Head of AI Department",
            stats: "<strong>6+ years of experience</strong> | 100+ AI projects | 10+ research papers",
            desc: "Saga is an experienced AI architect with global leadership experience, holding both MSC and PhD degrees. Specializes in GenAI/ML Architecture; Expert in Agentic AI and RAG ecosystems building. Active Assistant Research Professor.",
            image: Saga_Img
        }
    ],
    hire: [
        {
            name: "Mareeshwaran",
            role: "Head of AI Engineering",
            image: Maxim_Img,
            stats: "<strong>8+ Years Experience</strong> | PhD in AI | Ex-Google",
            desc: "Our mission is to bridge the gap between complex AI research and practical, scalable enterprise solutions. We don't just build models; we build value."
        }
    ]
};

const AITeam = ({ type = "consulting", title, onScheduleClick }) => {
    const team = teamData[type] || [];
    const displayTitle = title || (type === "hire" ? "Meet our expert" : "Our AI Team");

    if (team.length === 0) return null;

    return (
        <section className="dt-section-spacing">
            <div className="dt-container">
                <h2 className="dt-section-title">{displayTitle}</h2>
                <div className="dt-team-showcase">
                    {team.map((member, idx) => (
                        <div key={idx} className="dt-team-member-card">
                            <div className="dt-team-member-image">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="dt-team-member-details">
                                <span className="dt-team-role-badge">{member.role}</span>
                                <h3 className="dt-team-name">{member.name}</h3>
                                <div 
                                    className="dt-team-stats" 
                                    dangerouslySetInnerHTML={{ __html: member.stats }}
                                ></div>
                                <p className="dt-team-desc">{member.desc}</p>
                                <div className="dt-team-actions">
                                    <button 
                                        className="dt-btn-primary dt-btn-calendar" 
                                        onClick={onScheduleClick}
                                    >
                                        Schedule a call <FiCalendar />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AITeam;
