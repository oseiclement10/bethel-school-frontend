export const PillCaption = ({ title, className }: { title: string, className?: string }) => {
  return (
    <h3 className={`text-center text-sm px-3 py-[2px] bg-blue-100 w-fit text-blue-800 font-semibold mb-4  mx-auto rounded-3xl ${className}`}>
      {title}
    </h3>
  );
};
