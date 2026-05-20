import { FiCalendar } from 'react-icons/fi';
import './AITeam.css';

// Images
import Saga_Img from "../../assets/images/Exprience/Experience_1.jpg";
import Maxim_Img from "../../assets/images/Exprience/Experience_4.png";

const teamData = {
    consulting: [
        {
            name: "Irfan",
            role: "Head of AI Department",
            stats: "<strong>Enterprise AI Strategy</strong>",
            desc: "Irfan is an experienced AI architect with global leadership experience, holding both MSC and PhD degrees. Specializes in GenAI/ML Architecture, Expert in Agentic AI and RAG ecosystems building. Active Assistant Research Professor.",
            image: Saga_Img
        }
    ],
    hire: [
        {
            name: "Deeshana",
            role: "Head of AI Engineering",
            image: Maxim_Img,
            stats: "<strong>AI Engineering Excellence</strong>",
            desc: "Ms. Deeshana leads AI Engineering at Devopstrio, focusing on delivering high-impact, production-ready AI solutions. With expertise in MLOps, scalable ML systems, and applied AI research, she drives the development of intelligent, enterprise-grade applications. Her work ensures that advanced AI capabilities are seamlessly integrated into business workflows, transforming data into measurable value."
        }
    ]
};

const AITeam = ({ type = "consulting", title, onScheduleClick }) => {
    const team = teamData[type] || [];
    const displayTitle = title || (type === "hire" ? "Meet our expert" : "Our AI Team");

    if (team.length === 0) return null;

    return (
        <section className="ait-section">
            <div className="ait-container">
                <h2 className="ait-title">{displayTitle}</h2>
                <div className="ait-grid">
                    {team.map((member, idx) => (
                        <div key={idx} className="ait-card">
                            <div className="ait-card-img">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="ait-card-body">
                                <span className="ait-badge">{member.role}</span>
                                <h3 className="ait-name">{member.name}</h3>
                                <div 
                                    className="ait-stats" 
                                    dangerouslySetInnerHTML={{ __html: member.stats }}
                                ></div>
                                <p className="ait-desc">{member.desc}</p>
                                <div className="ait-actions">
                                    <button 
                                        className="ait-btn" 
                                        onClick={onScheduleClick} >
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
