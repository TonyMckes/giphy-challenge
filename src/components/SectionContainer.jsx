function SectionContainer({ children, heading }) {
  return (
    <section className="container mx-auto">
      <div className="mx-4">
        <h2 className="my-4 text-lg font-bold ">{heading}</h2>
        {children}
      </div>
    </section>
  );
}
export default SectionContainer;
