import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { FiSearch, FiChevronRight, FiX, FiDownload, FiShare2, FiLink, FiExternalLink } from "react-icons/fi";
import api from "../../services/api";
import "../../Style/Media/IndividualCategoryPage.css";


// components
import CareersHero from "../../components/Hero/Careershero/Careershero";
import Newsletter from "../../components/Newsletter/Newsletter"


const IndividualCategoryPage = () => {
    const { sectionSlug, categorySlug } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [previewDoc, setPreviewDoc] = useState(null);
    const [copied, setCopied] = useState(false);
    const [docLoadingId, setDocLoadingId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [allCategories, setAllCategories] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        capability: "All",
        industry: "All",
        platform: "All"
    });
    const itemsPerPage = 12;

    const targetSection = sectionSlug || "insights-knowledge";
    const targetCategory = categorySlug || "white-paper";

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                // Using getAllContentByCategory or similar. 
                // If it's a specific 'white-paper' request, we target that.
                const response = await api.getAllContentByCategory(
                    targetSection,
                    targetCategory,
                    100
                );

                if (response) {
                    const transformed = response.map(post => api.transformContent(post));
                    setPosts(transformed);
                }
            } catch (err) {
                console.error("Failed to fetch white papers:", err);
                setError("Unable to load content at this time.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [targetSection, targetCategory]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.getCategories(targetSection);
                if (response?.categories) {
                    setAllCategories(response.categories.map(c => c.name));
                }
            } catch (err) {
                console.error("Failed to fetch dynamic categories:", err);
            }
        };
        fetchCategories();
    }, [targetSection]);

    const filterOptions = useMemo(() => {
        const industries = new Set(["All"]);

        posts.forEach(post => {
            if (post.text) industries.add(post.text);
        });

        return {
            capabilities: ["All", ...allCategories],
            industries: Array.from(industries),
            platforms: ["All", "AWS", "GCP", "Azure", "AI Services"],
        };
    }, [posts, allCategories]);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCap = selectedFilters.capability === "All" || 
                               post.category?.name === selectedFilters.capability || 
                               (post.tags && post.tags.includes(selectedFilters.capability)) ||
                               post.title.toLowerCase().includes(selectedFilters.capability.toLowerCase());

            const matchesInd = selectedFilters.industry === "All" || 
                               post.text === selectedFilters.industry ||
                               post.title.toLowerCase().includes(selectedFilters.industry.toLowerCase());
            
            const matchesPlatform = selectedFilters.platform === "All" || 
                                   post.title.toLowerCase().includes(selectedFilters.platform.toLowerCase()) ||
                                   (post.tags && post.tags.some(tag => tag.toLowerCase() === selectedFilters.platform.toLowerCase()));
            
            return matchesSearch && matchesCap && matchesInd && matchesPlatform;
        });
    }, [posts, searchQuery, selectedFilters]);

    // Reset to page 1 when search query changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: "smooth" });
    };

    useEffect(() => {
        const closeDropdowns = () => setOpenDropdown(null);
        window.addEventListener('click', closeDropdowns);
        return () => window.removeEventListener('click', closeDropdowns);
    }, []);

    if (loading) {
        return (
            <div className="icp-wrapper">
                <div className="icp-loading">
                    <div className="icp-spinner"></div>
                    <p>Loading digital assets...</p>
                </div>
            </div>
        );
    }

    const getBreadcrumbTitle = () => {
        if (categorySlug === "white-paper") return "White Paper";
        if (categorySlug === "pdf") return "PDF";
        return categorySlug ? categorySlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : "White Paper";
    };

    const extractDocInfo = (postData) => {
        const content = postData.content || "";

        const docRegex = /\[.*?\].*?\(([^)]*?(?:\.pdf|\/documents\/|file_id=)[^)]*?)\)/i;
        const match = content.match(docRegex);

        if (match && match[1]) {
            let url = match[1].trim();
            if (url.includes('/api/images/')) {
                url = url.replace('/api/images/', '/api/documents/');
            }
            return { url, title: postData.title, id: postData.id };
        }

        const urlOnlyRegex = /(https?:\/\/[^\s\)]+?\/documents\/[^\s\)]+)/i;
        const urlMatch = content.match(urlOnlyRegex);
        if (urlMatch && urlMatch[0]) {
            return { url: urlMatch[0].trim(), title: postData.title, id: postData.id };
        }

        return null;
    };



    const handleOpenDoc = async (post) => {
        try {
            setDocLoadingId(post.id);

            // We must fetch full data because list endpoints often omit 'blocks/content'
            const data = await api.getContentById(post.id);
            if (!data?.item) throw new Error("Post not found");

            const fullPost = api.transformContent(data.item);
            const docInfo = extractDocInfo(fullPost);

            if (docInfo) {
                setPreviewDoc(docInfo);
            } else {
                console.error("Critical: Document link not found in full content for White Paper:", post.id);
                alert("This asset does not contain a downloadable document.");
            }
        } catch (err) {
            console.error("Failed to fetch document details:", err);
            alert("Unable to open the document at this time.");
        } finally {
            setDocLoadingId(null);
        }
    };

    const handleDownloadFile = async (url, filename) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.setAttribute('download', filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Direct download failed:", err);
            window.open(url, '_blank');
        }
    };

    // Helper for custom dropdowns
    const CustomDropdown = ({ label, options, field }) => (
        <div className={`icp-custom-dropdown ${openDropdown === field ? 'active' : ''}`} onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === field ? null : field);
        }}>
            <div className="icp-dropdown-header">
                <span>{selectedFilters[field] === "All" ? label : selectedFilters[field]}</span>
                <FiChevronRight className="icp-dropdown-arrow" />
            </div>
            {openDropdown === field && (
                <ul className="icp-dropdown-list">
                    {options.map(opt => (
                        <li 
                            key={opt}
                            className={`icp-dropdown-item ${selectedFilters[field] === opt ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedFilters({...selectedFilters, [field]: opt});
                                setCurrentPage(1);
                            }}
                        >
                            {opt === "All" ? label : opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );


    return (
        <div className="icp-wrapper">
            <CareersHero scrollId="digital-assets-section" />
            <div className="icp-container">
                {/* Breadcrumbs */}
                <nav className="icp-breadcrumbs">
                    <Link to="/" className="icp-breadcrumb-link">Home</Link>
                    <FiChevronRight className="icp-breadcrumb-separator" />
                    <Link to="/insights" className="icp-breadcrumb-link">All</Link>
                    <FiChevronRight className="icp-breadcrumb-separator" />
                    <span>{getBreadcrumbTitle()}</span>
                </nav>

                <div id="digital-assets-section" className="icp-top-bar" style={{ marginBottom: "2rem" }}>
                    <header className="icp-header">
                        <h1 className="icp-title">{categorySlug === "white-paper" ? "White Paper" : "Digital Assets"}</h1>
                    </header>
                </div>

                {/* Universal Filter Bar */}
                <div className="icp-universal-filter-bar">
                    <div className="icp-filter-label">Filter by:</div>
                    
                    <div className="icp-filter-dropdown-group">
                        {/* <CustomDropdown 
                            label="Industry" 
                            options={filterOptions.industries} 
                            field="industry" 
                        /> */}
                        <CustomDropdown 
                            label="All Platform" 
                            options={filterOptions.platforms} 
                            field="platform" 
                        />
                    </div>

                    <div className="icp-filter-search-combined">
                        <input
                            type="text"
                            className="icp-filter-search-input"
                            placeholder="Search ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FiSearch className="icp-filter-search-icon" />
                    </div>

                    <button className="icp-filter-apply-btn">
                        Search <FiChevronRight />
                    </button>
                </div>

                {/* Grid */}
                <div className="icp-grid">
                    {currentItems.length > 0 ? (
                        currentItems.map((post, idx) => (
                            <div
                                key={post.id || idx}
                                className="icp-card"
                                style={{ "--index": idx }}
                            >
                                <div className="icp-card-inner">
                                    {/* Front Side */}
                                    <div className="icp-card-front">
                                        <div className="icp-card-image-box">
                                            <img
                                                src={post.image || "/images/placeholder.jpg"}
                                                alt={post.title}
                                                className="icp-card-img"
                                            />
                                        </div>
                                        <div className="icp-card-content">
                                            <span className="icp-card-category">
                                                {post.category?.name || "Resource"}
                                            </span>
                                            <h3 className="icp-card-title">{post.title}</h3>
                                        </div>
                                    </div>

                                    {/* Hover Detail Side (Slides Up) */}
                                    <div className="icp-card-detail">
                                        <div className="icp-detail-content">
                                            <span className="icp-card-category">
                                                {post.category?.name || "Resource"}
                                            </span>
                                            <h3 className="icp-card-title">{post.title}</h3>
                                            <p className="icp-card-excerpt">
                                                {post.excerpt || "Detailed breakdown and expert insights included in this digital asset."}
                                            </p>

                                            <button
                                                onClick={() => handleOpenDoc(post)}
                                                className="icp-learn-more"
                                                disabled={docLoadingId === post.id}
                                            >
                                                {docLoadingId === post.id ? "Opening..." : "Learn more"} <FiChevronRight />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sticky Type Identifier */}
                                    <span className="icp-card-type sticky">PDF</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="icp-error">
                            <p>No results found for "{searchQuery}"</p>
                        </div>
                    )}
                </div>

                {/* Pagination UI */}
                {totalPages > 1 && (
                    <div className="icp-pagination">
                        <button
                            className={`icp-page-btn ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        <div className="icp-page-numbers">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                <button
                                    key={number}
                                    className={`icp-page-number ${currentPage === number ? 'active' : ''}`}
                                    onClick={() => handlePageChange(number)}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>

                        <button
                            className={`icp-page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            {/* Document Preview Modal (from PostDetail) */}
            {previewDoc && (
                <div className="pd-doc-modal-overlay" onClick={() => setPreviewDoc(null)}>
                    <div className="pd-doc-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="pd-doc-modal-header">
                            <div className="pd-doc-modal-title">
                                {previewDoc.title}
                            </div>
                            <div className="pd-doc-modal-actions">
                                <button 
                                    onClick={() => handleDownloadFile(previewDoc.url, previewDoc.title)} 
                                    className="pd-doc-action-btn" 
                                    title="Download"
                                >
                                    <FiDownload />
                                </button>
                                <button
                                    className="pd-doc-action-btn"
                                    title="Share Document"
                                    onClick={() => {
                                        const readerUrl = `${window.location.origin}/${sectionSlug}/${categorySlug}/${previewDoc.id}/reader`;
                                        if (navigator.share) {
                                            navigator.share({
                                                title: previewDoc.title,
                                                url: readerUrl
                                            }).catch(console.error);
                                        } else {
                                            navigator.clipboard.writeText(readerUrl);
                                            setCopied(true);
                                            setTimeout(() => setCopied(false), 2000);
                                        }
                                    }}
                                >
                                    <FiShare2 />
                                </button>
                                {/* <button
                                    className="pd-doc-action-btn"
                                    title="Copy Link"
                                    onClick={() => {
                                        navigator.clipboard.writeText(previewDoc.url);
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 2000);
                                    }}
                                >
                                    <FiLink />
                                </button> */}
                                <Link 
                                    to={`/${sectionSlug}/${categorySlug}/${previewDoc.id}/reader`} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pd-doc-action-btn" 
                                    title="View Fullscreen"
                                >
                                    <FiExternalLink />
                                </Link>
                                <div className="pd-doc-divider"></div>
                                <button className="pd-doc-action-btn close" onClick={() => setPreviewDoc(null)} title="Close">
                                    <FiX />
                                </button>
                            </div>
                        </div>
                        <div className="pd-doc-modal-content">
                            <iframe
                                src={`${previewDoc.url}#toolbar=0&navpanes=0`}
                                title={previewDoc.title}
                                className="pd-doc-iframe"
                            />
                        </div>
                    </div>
                </div>
            )}
            <Newsletter />
        </div>
    );
};

export default IndividualCategoryPage;
