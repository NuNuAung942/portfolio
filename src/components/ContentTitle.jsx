/* eslint-disable react/prop-types */
const ContentTitle = ({ title, headPath }) => {
  return (
    <div className="mb-8">
      <p className="flex items-center text-gray text-sm tracking-wide uppercase">
        {headPath}
        <span className="inline-block w-[40px] h-[1px] bg-secondary ml-2"></span>
      </p>
      <h1 className="text-3xl font-bold uppercase text-primary">{title}</h1>
    </div>
  );
};

export default ContentTitle;
