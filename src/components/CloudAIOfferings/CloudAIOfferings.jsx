import "./CloudAIOfferings.css";

const CLOUD_ITEMS = [
  {
    name: "AWS",
    image: "/images/amazon.jpg",
    readTime: "8 min read",
  },
  {
    name: "AZURE",
    image: "/images/microsoft.jpg",
    readTime: "6 min read",
  },
  {
    name: "GOOGLE",
    image: "/images/google.jpg",
    readTime: "10 min read",
  },
  {
    name: "ORACLE",
    image: "/images/oracle.jpg",
    readTime: "7 min read",
  },
];

export default function CloudAIOfferings() {
  return (
    <section className="cloud-ai-section">
      <div className="cloud-ai-header">
        <h2 className="cloud-ai-title">
          Our <span>Cloud Centric & AI</span> Offering
        </h2>

        <div className="cloud-ai-nav">
          <button aria-label="Previous">←</button>
          <button aria-label="Next">→</button>
        </div>
      </div>

      <div className="cloud-cards">
        {CLOUD_ITEMS.map((item) => (
          <article className="cloud-card" key={item.name}>
            <div className="cloud-image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="cloud-card-body">
              <span className="cloud-tag">{item.name}</span>

              <h3 className="cloud-card-title">
                Cloud & AI Solutions with {item.name}
              </h3>

              <div className="cloud-card-footer">
                <span className="read-time">{item.readTime}</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}