import Image from 'next/image';

const DeviceManagement: React.FC = () => {
  return (
    <>

        <div className="grid grid-cols-1 gap-6">
          <div className=" flex flex-col">
            <h3 className="text-sm  font-medium text-gray-600">Device Type</h3>
            <p className=" text-base font-medium text-gray-800">Laptop</p>
          </div>

          <div className=" flex flex-col">
            <h3 className="text-sm  font-medium text-gray-600">Device Name</h3>
            <p className=" text-base font-medium text-gray-800">Macbook 2021</p>
          </div>

          <div className=" flex flex-col">
            <h3 className="text-sm  font-medium text-gray-600">Timeline</h3>
            <p className=" text-base font-medium text-gray-800">21/Jun/2024 - 21/Dec/2024</p>
                  </div>
                  
                  <div className=" flex flex-col">
            <h3 className="text-sm  font-medium text-gray-800">Status</h3>
            <p className=" text-base font-medium text-green-800">Assigned</p>
                  </div>
                  
                  <div className=" flex flex-col">
            <h3 className="text-sm font-medium text-gray-600">Details</h3>
            <p className="text-base font-medium text-gray-800">Device name HP Elitebook Processor......</p>
                  </div>
                  

        </div>
    </>
  );
};

export default DeviceManagement;
