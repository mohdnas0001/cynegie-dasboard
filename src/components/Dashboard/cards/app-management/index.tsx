import Image from 'next/image';

const AppManagement: React.FC = () => {
  return (
    <>

        <div className="grid grid-cols-1 gap-6">
          <div className=" flex flex-col">
            <h3 className="text-sm  font-medium text-gray-600">App Name</h3>
            <p className=" text-base font-medium text-gray-800">Figma</p>
          </div>

          <div className=" flex flex-col">
            <h3 className="text-sm  font-medium text-gray-600">App ID</h3>
            <p className=" text-base font-medium text-gray-800">202201301610</p>
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
            <p className="text-base font-medium text-gray-800">Figma Update for version 1.0 is disab......</p>
                  </div>
                  

        </div>
    </>
  );
};

export default AppManagement;
