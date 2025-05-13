import Vote from '../components/vote';


import PolicySummary from "./policySummary";
import CheerSection from './cheering';
import Footer from './footer/index.jsx';
import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import ShareSection from './share/index.jsx';

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <div class="bg-democratic text-white">더불어민주당</div>
      <div class="text-people">국민의힘</div>
      <div class="text-reform">개혁신당</div> */}

      <Vote />
    </div>
  );
};

export default DefaultLayout;
