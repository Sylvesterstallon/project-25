import img_1 from "../assets/projects/img_1.png"

const Blog = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex flex-wrap justify-between items-center
        w-full overflow-hidden md:flex-nowrap text-center' style={{backgroundImage: `url(${img_1})`}}>
    <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32">
        <h1 className="text-white font-normal md:text-[80px] text-5xl">
          Blog
        </h1>
      </div>
    </div>
  )
}

export default Blog
