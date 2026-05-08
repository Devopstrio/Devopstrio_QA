// API Service Module
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = {
  // Posts endpoints
  getAllPosts: async (limit = 50) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts?limit=${limit}`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  getContentById: async (postId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${postId}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      return await response.json();
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  },

  getAllContentByCategory: async (sectionSlug, categorySlug, limit = 10) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/posts/category/${categorySlug}?limit=${limit}`
      );
      if (!response.ok) throw new Error('Failed to fetch category posts');
      return await response.json();
    } catch (error) {
      console.error('Error fetching category posts:', error);
      return [];
    }
  },

  // Like endpoint
  likePost: async (postId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${postId}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Failed to like post');
      return await response.json();
    } catch (error) {
      console.error('Error liking post:', error);
      return null;
    }
  },

  // Transform content for frontend
  transformContent: (item, section = {}, category = {}) => {
    return {
      id: item.id || item._id,
      title: item.title || '',
      excerpt: item.excerpt || item.description || '',
      content: item.content || item.body || '',
      image: item.image || item.imageUrl || '',
      author: item.author || 'Devopstrio Editorial',
      authorAvatar: item.authorAvatar || item.authorImage || '',
      date: item.date || item.createdAt || new Date().toISOString(),
      category: category || item.category || { name: 'General', slug: 'general' },
      section: section || item.section || { name: 'Media', slug: 'media' },
      views: item.views || 0,
      likes: item.likes || 0,
      tags: item.tags || [],
      readTime: item.readTime || 5,
    };
  },
};

export default api;
