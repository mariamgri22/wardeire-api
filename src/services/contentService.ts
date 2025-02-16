import Content from '../models/Content';

// Get all content entries
export const getAllContent = async () => {
  return await Content.findAll();
};

// Get content by ID
export const getContentById = async (id: number) => {
  return await Content.findByPk(id);
};

// Create new content
export const createContent = async (data: { hashtag: string; title: string; description: string; buttonText: string; imageUrl: string }) => {
  return await Content.create(data);
};

// Update content
export const updateContent = async (id: number, data: { hashtag: string; title: string; description: string; buttonText: string; imageUrl: string }) => {
  const content = await Content.findByPk(id);
  if (!content) return null;

  return await content.update(data);
};

// Delete content
export const deleteContent = async (id: number) => {
  const content = await Content.findByPk(id);
  if (!content) return null;

  await content.destroy();
  return true;
};
