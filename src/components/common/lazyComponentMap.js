import { lazy } from 'react';

export const fadeImportMap = {
  PolicySummary: lazy(() => import('../policySummary')),
  Map: lazy(() => import('../map/index.jsx')),
  Vote: lazy(() => import('../vote')),
  ApprovalRating: lazy(() => import('../approvalRating')),
  CheerSection: lazy(() => import('../cheering')),
  VoteCount: lazy(() => import('../voteCount')),
  ShareSection: lazy(() => import('../share/index.jsx')),
};
