
import useServiceces from '../../../Hooks/useServiceces';
import Service from '../Service/Service';

const Services = () => {
    // Custom hook being used here
 const [info] = useServiceces()
    return (
        // Services
        <div>
             <div className="text-center my-5 ">
                <h2 className="fw-bold">Why Choosing Our Services</h2>
                <p className="p-2">We handpick the best coaches and health experts from <br /> across the country to make sure you get the most personalized health care you deserve between those doctor visits.</p>
           </div>
            <div className="px-5">
                <main className="page-content">

                {
                    info.map(loadData => <Service
                        key={loadData.key}
                        data={loadData}></Service>)
                }
                </main>
            </div>
              

        </div>
    );
};

export default Services;