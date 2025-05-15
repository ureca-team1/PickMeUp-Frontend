import { lazy } from 'react';

export const fadeImportMap = {
  PolicySummary: lazy(() => import('../policySummary')),
  Vote: lazy(() => import('../vote')),
  ApprovalRating: lazy(() => import('../approvalRating')),
  CheerSection: lazy(() => import('../cheering')),
  ShareSection: lazy(() => import('../share/index.jsx')),
};
