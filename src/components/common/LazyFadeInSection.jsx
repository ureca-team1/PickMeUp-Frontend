import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeImportMap } from './lazyComponentMap';

const MotionDiv = motion.div;

const FadeInLazyWrapper = ({ id, componentKey, SkeletonComponent, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const LazyComponent = fadeImportMap[componentKey];
  if (!LazyComponent) return null;

  // ✅ 반응형 높이 반환
  const getMinHeightClass = () => {
    const isMobile = window.innerWidth < 768;

    const heightMap = {
      PolicySummary: isMobile ? 'min-h-[581px]' : 'min-h-[1180px]',
      Map: isMobile ? 'min-h-[1045px]' : 'min-h-[1050px]',
      Vote: isMobile ? 'min-h-[1727px]' : 'min-h-[1740px]',
      ApprovalRating: isMobile ? 'min-h-[887px]' : 'min-h-[890px]',
      CheerSection: isMobile ? 'min-h-[857px]' : 'min-h-[860px]',
    };

    return heightMap[componentKey] || 'min-h-[600px]';
  };

  return (
    <section ref={ref} id={id} className={`scroll-margin ${getMinHeightClass()}`}>
      <Suspense fallback={null}>
        {inView ? (
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
          >
            <LazyComponent />
          </MotionDiv>
        ) : (
          SkeletonComponent && <SkeletonComponent />
        )}
      </Suspense>
    </section>
  );
};

export default FadeInLazyWrapper;
