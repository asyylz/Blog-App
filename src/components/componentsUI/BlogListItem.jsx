export default function BlogListItem({title,id}) {
  return (
    <div key={id}
      //style={{ border: '1px solid red' }}
      className="container flex ml-2 h-[40px] cursor-pointer mb-8"
    >
      <img src="./assets/arrowRight.svg" alt="arrow" className="h-5 w-5" />
      <p className="ml-3 mt-2 text-2xl font-ibm-flex italic font-thin">
        {title}
      </p>
    </div>
  );
}
