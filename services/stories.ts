import { axiosInstance } from './axios-instance';

export type IStory = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  const { data } = await axiosInstance.get<IStory[]>('/stories');

  return data;
};
