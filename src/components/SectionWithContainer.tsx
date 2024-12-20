const SectionWithContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pb-10 md:pb-20 overflow-y-scroll h-screen">
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionWithContainer;
