import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FiArrowLeft, 
  FiDownload, 
  FiX
} from "react-icons/fi";
import api from "../../services/api";
import "../../Style/Media/DocumentReader.css";

const DocumentReader = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [docInfo, setDocInfo] = useState(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        
        const fetchDocData = async () => {
            try {
                setLoading(true);
                const data = await api.getContentById(postId);
                if (!data?.item) throw new Error("Document not found");

                const post = api.transformContent(data.item);
                const info = extractDocInfo(post);
                if (info) {
                    setDocInfo(info);
                } else {
                    throw new Error("No document found in content");
                }
            } catch (err) {
                console.error("Failed to load document:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDocData();

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [postId]);

    const extractDocInfo = (postData) => {
        const content = postData.content || "";
        const docRegex = /\[.*?\].*?\(([^)]*?(?:\.pdf|\/documents\/|file_id=)[^)]*?)\)/i;
        const match = content.match(docRegex);

        if (match && match[1]) {
            let url = match[1].trim();
            if (url.includes('/api/images/')) {
                url = url.replace('/api/images/', '/api/documents/');
            }
            return { url, title: postData.title };
        }

        const urlOnlyRegex = /(https?:\/\/[^\s\)]+?\/documents\/[^\s\)]+)/i;
        const urlMatch = content.match(urlOnlyRegex);
        if (urlMatch && urlMatch[0]) {
            return { url: urlMatch[0].trim(), title: postData.title };
        }
        return null;
    };

    const handleDownload = async () => {
        if (!docInfo?.url) return;
        try {
            const response = await fetch(docInfo.url);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", docInfo.title.endsWith(".pdf") ? docInfo.title : `${docInfo.title}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("Download failed:", err);
            window.open(docInfo.url, "_blank");
        }
    };

    if (loading) {
        return (
            <div className="dr-error-container">
                <div className="dr-loading-box">
                    <div className="dr-spinner"></div>
                    <p>Preparing digital asset...</p>
                </div>
            </div>
        );
    }

    if (!docInfo) {
        return (
            <div className="dr-error-container">
                <div className="dr-error-box">
                    <h2>Document Not Found</h2>
                    <p>The requested digital asset could not be loaded.</p>
                    <button onClick={() => navigate(-1)} className="dr-error-btn">
                        <FiArrowLeft /> Return to Gallery
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="dr-master-wrapper">
            <header className="dr-header visible">
                <div className="dr-header-left">
                    {/* <button className="dr-back-btn" onClick={() => navigate(-1)}>
                        <FiArrowLeft size={18} />
                        <span>Back</span>
                    </button> */}
                    {/* <div className="dr-divider"></div> */}
                    <h1 className="dr-doc-title">{docInfo.title}</h1>
                </div>

                <div className="dr-header-center">
                    <span className="dr-branding">Devopstrio <span>Reader</span></span>
                </div>

                <div className="dr-header-right">
                    <button className="dr-download-btn" onClick={handleDownload}>
                        <FiDownload />
                        <span>Download</span>
                    </button>
                    <button className="dr-close-btn" onClick={() => window.close()} title="Close Viewer">
                        <FiX size={20} />
                    </button>
                </div>
            </header>

            <main className="dr-content-area">
                <iframe
                    src={`${docInfo.url}#toolbar=1&navpanes=1&scrollbar=1&statusbar=0&messages=0`}
                    title={docInfo.title}
                    className="dr-pdf-iframe"
                />
            </main>
        </div>
    );
};

export default DocumentReader;
