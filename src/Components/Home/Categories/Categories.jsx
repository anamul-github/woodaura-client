import { Link } from 'react-router-dom';


const Categories = () => {
    const categories = [
        {
            _id: 1,
            imgUrl: "https://wpbingosite.com/wordpress/funori/wp-content/uploads/2022/03/categories-6.jpg",
            categoryName: "Sofa"
        },
        {
            _id: 2,
            imgUrl: "https://wpbingosite.com/wordpress/funori/wp-content/uploads/2022/04/categories-14.jpg",
            categoryName: "Bed"
        },
        {
            _id: 3,
            imgUrl: "https://wpbingosite.com/wordpress/funori/wp-content/uploads/2022/03/categories-7.jpg",
            categoryName: "Chair"
        },
        {
            _id: 4,
            imgUrl: "https://wpbingosite.com/wordpress/funori/wp-content/uploads/2022/03/categories-10.jpg",
            categoryName: "Cabinet"
        }
    ]
    return (
        <div id="catagories" className="lg:py-10 py-4 bg-fixed bg-cover text-white" style={{ backgroundImage: `url("https://i.pinimg.com/originals/b9/1e/f6/b91ef686bde789f0b4540468c07e5a0b.jpg")` }}>
            <div className='p-4 md:p-0:'>
                <h1 data-aos="fade-up" data-aos-duration="500" className='text-3xl font-bold text-center '>Product Categories</h1>
                <p data-aos="fade-right" data-aos-duration="600" className='mx-auto text-center font-thin mt-4 my-1 max-w-2xl'>Some of our customers say that they trust us and buy our product without any hesitation because they believe us and always happy to buy our product.</p>
            </div>
            <div className='p-5 lg:p-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4'>
                {
                    categories?.map(category =>
                        <Link key={category._id} to={`/category/${category._id}`} >
                            <div className="p-3 rounded-lg backdrop-blur bg-white/10 hover:bg-white hover:text-gray-900 shadow-md hover:-mt-1 duration-300 m-1 flex items-center">
                                <img className="w-1/3 rounded-full" src={category.imgUrl} alt="" />
                                <p className='text-md uppercase font-bold text-center mx-auto'>{category.categoryName}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};


export default Categories;