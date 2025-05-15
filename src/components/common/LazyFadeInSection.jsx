import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeImportMap } from './lazyComponentMap';

const MotionDiv = motion.div;

const FadeInLazyWrapper = ({ id, componentKey, delay = 0, fallback = null }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const LazyComponent = fadeImportMap[componentKey];
  if (!LazyComponent) return null;

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-margin ${componentKey === 'VoteCount' ? '' : 'min-h-[40vh]'}`}
    >
      {inView && (
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay }}
        >
          <Suspense fallback={fallback}>
            <LazyComponent />
          </Suspense>
        </MotionDiv>
      )}
    </section>
  );
};

export default FadeInLazyWrapper;
