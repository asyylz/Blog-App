function PageContent({ title, children }) {
  return (
    <div
      //style={{ border: '1px solid red' }}
      className="bg-themeCream w-screen h-screen py-20"
    >
      <div
        //style={{ border: '1px solid blue' }}
        className="container rounded-lg mx-auto h-[200px] max-w-[300px] sm:max-w-xl bg-red-300 py-10 "
      >
        <h1 className="text-center text-xl sm:text-4xl font-ibm-flex">{title}</h1>
        <div className="text-center text-md sm:text-xl mt-5 font-ibm-flex">{children}</div>
      </div>
    </div>
  );
}

export default PageContent;
