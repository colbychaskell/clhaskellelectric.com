interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const TitledSection = ({ title, children }: SectionProps) => (
  <div className='w-full pt-5 px-4 px-md-5'>
    <h2>{title}</h2>
    {children}
  </div>
)

export default TitledSection
