const Title = ({ children, aos, delay }) => {
  return (
    <h1
      data-aos={aos}
      data-aos-delay={delay}
      className="rab-title-navy flex  flex-col"
    >
      {children}
    </h1>
  );
};
export default Title;
