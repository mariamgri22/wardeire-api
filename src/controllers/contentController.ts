import { Request, Response } from 'express';
import * as contentService from '../services/contentService';

export const getAllContent = async (req: Request, res: Response) => {
  try {
    const contents = await contentService.getAllContent();
    res.json(contents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching content', error });
  }
};

export const getContentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const content = await contentService.getContentById(Number(id));

    if (!content) return res.status(404).json({ message: 'Content not found' });

    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching content', error });
  }
};

export const createContent = async (req: Request, res: Response) => {
  try {
    const newContent = await contentService.createContent(req.body);
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating content', error });
  }
};

export const updateContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedContent = await contentService.updateContent(Number(id), req.body);

    if (!updatedContent) return res.status(404).json({ message: 'Content not found' });

    res.json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating content', error });
  }
};

export const deleteContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await contentService.deleteContent(Number(id));

    if (!deleted) return res.status(404).json({ message: 'Content not found' });

    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting content', error });
  }
};
