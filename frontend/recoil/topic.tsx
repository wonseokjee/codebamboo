import { atom } from 'recoil';

export interface CodeObject {
  code_id: number | null;
  language: string;
  content: string | null;
}

export const codeState = atom<CodeObject[]>({
  key: 'codeState',
  default: [
    {
      code_id: null,
      language: 'HTML',
      content: '',
    },
    {
      code_id: null,
      language: 'CSS',
      content: '',
    },
    {
      code_id: null,
      language: 'JavaScript',
      content: '',
    },
  ],
});

export interface ArticleObject {
  title: string;
  content: string | null;
}

export const articleState = atom<ArticleObject>({
  key: 'articleState',
  default: {
    title: '',
    content: '',
  },
});

export interface LeafObject {
  leaf_id: number;
  nickname: string;
  title: string;
  content: string;
  step: number;
  ref_order: number;
  parent_leaf_id: number;
  exportCnt: number;
  likeCnt: number;
  type: number;
  is_root: boolean;
  codes: CodeObject[];
  user_id: number;
}

export const LeafState = atom<LeafObject[]>({
  key: 'LeafState',
  default: [
    {
      leaf_id: 6,
      user_id: 7,
      nickname: '태형',
      title: '헬로우',
      content: '마이네임',
      step: 1,
      ref_order: 0,
      parent_leaf_id: 2,
      exportCnt: 6,
      likeCnt: 5,
      type: 1,
      is_root: true,
      codes: [],
    },
  ],
});

export interface selectedObject {
  leaf_id: number | null;
  user_id: number | null;
}

export const selectedLeafState = atom<selectedObject>({
  key: 'selectedLeafState',
  default: {
    user_id: null,
    leaf_id: null,
  },
})