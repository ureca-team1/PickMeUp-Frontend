import PolicySummary from "./PolicySummary/PolicySummary";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-nanum">
      <div class="bg-democratic text-white font-nanum">더불어민주당</div>
      <div class="text-people font-nanum" >국민의힘</div>
      <div class="text-reform font-nanum">개혁신당</div>
      <div className="bg-people text-white font-nanum px-4 py-2 rounded">국민의힘</div>
      <PolicySummary/>
    </div>
  );
};

export default DefaultLayout;
