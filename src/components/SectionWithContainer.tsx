const SectionWithContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-10 md:py-20 ">
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionWithContainer;
