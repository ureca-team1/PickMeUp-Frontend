import Facebook from '@/assets/facebook.svg?react';
import Link from '@/assets/line-md_link.svg?react';
import X from '@/assets/x.svg?react';

const LinkButton = ({ children, className, ...restProps }) => {
  return (
    <button
      className={`bg-secondary flex h-7 w-7 items-center justify-center rounded-full md:h-10 md:w-10 ${className}`}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};

function ShareSection() {
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다.');
  };

  return (
    <section className="mw-1280 pb-20">
      <h3 className="mb-5 text-center text-2xl font-bold md:mb-10 md:h-8 md:text-[2rem]">
        공유를 통해 더 많은 <br className="md:hidden" />
        투표 참가에 도움을 주세요!
      </h3>
      <div className="mx-auto flex w-fit items-center gap-5 md:gap-6">
        <LinkButton onClick={handleCopyLink}>
          <Link className="h-auto w-[18px] md:w-[26px]" />
        </LinkButton>
        {/* <LinkButton>
          <Kakao className="h-auto w-[18px] md:w-[26px]" />
        </LinkButton> */}
        <LinkButton className="twitter-share-button relative overflow-hidden">
          <X className="h-auto w-[18px] md:w-[26px]" />
          <a
            target="_blank"
            className="absolute inset-0 text-transparent"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('2025 Pick Your President\n')}&url=${window.location.href}`}
          >
            트윗하기
          </a>
        </LinkButton>
        <LinkButton
          className="fb-share-button relative overflow-hidden"
          data-href={window.location.href}
          data-layout=""
          data-size=""
        >
          <Facebook className="h-auto w-2.5 md:w-4" />
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.naver.com%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore absolute inset-0 text-transparent"
          >
            페이스북에 공유하기
          </a>
        </LinkButton>
      </div>
    </section>
  );
}

export default ShareSection;
