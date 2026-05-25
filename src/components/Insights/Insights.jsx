import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Cpu, Shield, Globe, BookOpen } from "lucide-react";
import api from "../../Services/api";
import "./Insights.css";

const STATIC_FALLBACK_INSIGHTS = [
  {
    id: "insight-cloud-opt",
    title: "AI-Driven Cloud Optimization",
    desc: "Learn how we integrate predictive machine learning loops directly into auto-scalers to cut infrastructure wastage by up to 40%.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    category: { slug: "cloud", name: "Cloud Operations" },
    section: { slug: "services" }
  },
  {
    id: "insight-gitops",
    title: "Securing GitOps Pipelines",
    desc: "Explore zero-trust compliance gates built directly into Kubernetes deployments to automate instant vulnerability patching.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    category: { slug: "security", name: "Cybersecurity" },
    section: { slug: "services" }
  },
  {
    id: "insight-multicloud",
    title: "Multi-Cloud Architectures",
    desc: "How modern high-throughput enterprise systems orchestrate reliable high-availability clusters across AWS, GCP, and Azure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    category: { slug: "multi-cloud", name: "Multi-Cloud" },
    section: { slug: "services" }
  }
];

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
];

export default function Insights() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from dynamic api
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await api.getAllPosts(100);
        // Exclude white-paper category
        const filtered = data.filter((p) => p.category?.slug !== "white-paper");
        setPosts(filtered);
      } catch (err) {
        console.error("Failed to fetch posts in Insights component:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter dynamic featured insights (max 3, distinct categories)
  const featuredInsights = useMemo(() => {
    if (!posts.length) return [];

    const sorted = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const usedCategories = new Set();
    const featured = [];

    for (const post of sorted) {
      const categorySlug = post.category?.slug;
      if (!usedCategories.has(categorySlug)) {
        featured.push(post);
        usedCategories.add(categorySlug);
      }
      if (featured.length === 3) break;
    }

    return featured;
  }, [posts]);

  // Use dynamic insights if loaded, fallback to static defaults otherwise
  const displayInsights = useMemo(() => {
    return featuredInsights.length > 0 ? featuredInsights : STATIC_FALLBACK_INSIGHTS;
  }, [featuredInsights]);

  // Map category to beautiful lucide icon
  const getCategoryIcon = (categoryName) => {
    const name = categoryName?.toLowerCase() || "";
    if (name.includes("cloud")) return <Globe size={24} />;
    if (name.includes("security") || name.includes("compliance") || name.includes("cyber")) {
      return <Shield size={24} />;
    }
    return <Cpu size={24} />;
  };

  // Helper for item navigation
  const handleCardClick = (item) => {
    if (item.link) {
      navigate(item.link);
    } else {
      navigate(`/${item.section?.slug}/${item.category?.slug}/${item.id}`);
    }
  };

  return (
    <section className="insights-root" id="insights-section">
      <div className="insights-container">
        
        {/* Mockup Title Header */}
        <div className="insights-header">
          <div className="insights-pill">
            <BookOpen size={14} className="insights-pill-icon" />
            <span>Insights</span>
          </div>
          <h2 className="insights-title">
            Featured <span>Thought Leadership</span>
          </h2>
          <div className="insights-accent-lines">
            <span className="line-short"></span>
            <span className="line-long"></span>
          </div>
        </div>

        {/* 3 Cards Horizontal Grid */}
        <div className="insights-grid">
          {displayInsights.map((item, index) => {
            const cardImage = item.image || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
            return (
              <div 
                key={item.id} 
                className="insights-card"
                onClick={() => handleCardClick(item)}
                style={{ cursor: "pointer" }}
              >
                {/* Top Image Part */}
                <div className="insights-img-wrap">
                  <img src={cardImage} alt={item.title} />
                  
                  {/* Overlapping Circular Badge */}
                  <div className="insights-icon-badge">
                    {getCategoryIcon(item.category?.name)}
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="insights-card-body">
                  <h3 className="insights-card-title">{item.title}</h3>
                  <p className="insights-card-desc">{item.desc || item.excerpt}</p>
                  
                  {/* Rounded CTA Button */}
                  <div className="insights-cta-btn">
                    <span>Read More</span>
                    <ArrowRight size={14} className="insights-cta-arrow" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
