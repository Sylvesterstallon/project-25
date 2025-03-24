import Union from "../assets/projects/Union.png"
import Temple from "../assets/projects/temple.png"



const Background = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center mb-18">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:p-8 lg:p-12 xl:p-12 md:mt-8">
        <h1 className="text-black font-bold text-[38px] md:text-3xl lg:text-4xl xl:text-5xl leading-11">Our Background</h1>
        <p className="font-normal md:text-xl text-lg lg:text-2xl  leading-8 text-regal-light-black font-default md:mt-10">
          Tourism in Abia State was first fashioned in 1995 by the Military
          Administration of Captain Mike Akhigbe as a department under the
          Ministry of Home Affairs. In 1991 the Government of Chief Michael
          Otedola, removed the Tourism Department from the Ministry of Home
          Affairs and merged it with the Ministry of Information and Culture,
          thus becoming the Bureau of Information, Culture & Tourism and was
          headed by a Permanent Secretary. <br />
          <br />
           In 1994, the Tourism Department was
          again detached from Bureau of Information, Culture and Tourism and was
          merged with the Ministry of Commerce, Industry and Tourism (MCIT) and
          was headed by a Commissioner. <br />
          <br />
           During that period, the Lagos State
          Tourism Board was created out of the Tourism Department; the functions
          of the Board were strictly tourism promotion and marketing while on
          the other hand the Tourism Department was in charge of policy matters. <br />
          In 1998, the Tourism Department and the Lagos State Tourism Board
          became a full Corporation with the name Lagos State Waterfront and
          Tourism Development Corporation (LSWTDC) under a Managing Director
        </p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 lg:w-1/2 p-4 md:p-8 lg:p-12 xl:p-12 relative md:mt-30">
        <img src={Union} alt="union-img" className="md:w-120 lg:w-120 w-90" />
        <img src={Temple} alt="temple-img" className="absolute top-2/3 left-1/2 transform -translate-x-1/5
        -translate-y-1/2 w-70"/>

        </div> 
      
      
    </div>
    
  );
};

export default Background;
