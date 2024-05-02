export default function BlogListItem() {
  return (
    <div
      style={{ border: '1px solid red' }}
      className="container flex ml-2 h-[40px] cursor-pointer"
    >
      <img src="./assets/arrowRight.svg" alt="arrow" className="h-5 w-5" />
      <p className="ml-2 mt-2 text-2xl font-ibm-flex italic  font-thin">
        Title
      </p>
    </div>
  );
}
