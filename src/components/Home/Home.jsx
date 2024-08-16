import { useLoaderData } from 'react-router-dom';
import banner from '../../../public/pic/banner.jpg'
import Doctors from '../Doctors/Doctors';

const Home = () => {
    const docs= useLoaderData()
    console.log(docs);
    return (
        <div>
            {/* banner            */}
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src={banner}
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-center">
                    <p className='md:text-7xl font-bold text-white'>Book Your Appointment</p>
                </div>
            </div>
            </div>
            {/* doctors list */}
            <h2 className='md:my-10 mt-5 text-4xl text-center font-bold text-white'>Top Doctors</h2>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 justify-end px-20'>
            {
                docs.map(doc=><Doctors
                key={doc.id}
                doc={doc}></Doctors>)
            }
            </div>
        </div>
    );
};

export default Home;