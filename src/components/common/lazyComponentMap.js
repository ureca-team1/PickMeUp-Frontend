import { lazy } from 'react';

export const fadeImportMap = {
  PolicySummary: lazy(() => import('../policySummary')),
  Vote: lazy(() => import('../vote')),
  CheerSection: lazy(() => import('../cheering')),
  ShareSection: lazy(() => import('../share/index.jsx')),
};
