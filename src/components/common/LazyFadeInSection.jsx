import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Suspense, useEffect } from 'react';
import { fadeImportMap } from './lazyComponentMap';

const MotionDiv = motion.div;

const FadeInLazyWrapper = ({ componentKey, delay = 0, fallback = null }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log(`${componentKey} is in view`);
    }
  }, [inView, componentKey]);

  const LazyComponent = fadeImportMap[componentKey];
  if (!LazyComponent) return null;

  return (
    <div ref={ref} className="min-h-[40vh]">
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
    </div>
  );
};

export default FadeInLazyWrapper;
