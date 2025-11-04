type ScreenHeaderProps = {
  header?: React.ReactNode;
};

const ScreenHeader = ({ header }: ScreenHeaderProps) => {
  return (
    <div className="w-1/2 mx-auto text-5xl font-semibold text-center text-slate-800">
      {header}
    </div>
  );
};

export default ScreenHeader;
