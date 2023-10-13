import reviewsData from '@/data/reviews.json';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { IReview } from '@/common/interfaces/data/reviews';

const reviews = reviewsData as IReview;

export const useReviews = (dictionary: IHomeDictionary['reviews']) => ({
  ...dictionary,
  ...reviews,
  author: {
    ...reviews.author,
    ...dictionary.author,
  },
});
