const Title = ({ children, aos }) => {
  return (
    <h1 data-aos={aos} className="rab-title-navy flex  flex-col">
      {children}
    </h1>
  );
};
export default Title;
