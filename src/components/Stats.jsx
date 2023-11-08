import "../styles/Stats.css";
const Stats = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span>10</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
              Years On The Market
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                $<span>12</span>m
              </h3>
              <p className="text-base font-medium leading-7 text-center text-accent-content">
                Annual Revenue Growth
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span id="countto3" data-decimal="1">2600</span>k+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-accent-content">
                Global Partners
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-accent-content">
                <span id="countto4">180000</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600 text-accent-content">
                Daily Website Visitors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
