import CountUp from "../Animation/CountUp";
const CardStatistic = ({ children, angka, code1, kode2 }) => {
  return (
    <div className="w-50  py-2">
      <h1 className="text-3xl font-extrabold tx-rab-navy">
        <span className="tx-rab-green ">{code1}</span>{" "}
        <CountUp
          from={0}
          to={angka}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
          startCounting
        />{" "}
        <span className="tx-rab-green">{kode2}</span>
      </h1>
      <p className="text-md tx-rab-navy font-bold">{children}</p>
    </div>
  );
};

export default CardStatistic;
