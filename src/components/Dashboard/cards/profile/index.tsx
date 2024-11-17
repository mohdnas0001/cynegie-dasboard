import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <>
      <div className="p-6 ">
        <div className="flex mt-2 items-center flex-col gap-4">
          {/* Circle wrapper around image */}
          <span className="h-40 w-40 rounded-full border-4 border-primary500 flex items-center justify-center">
            <Image
              width={312}
              height={112}
              src="/images/user/user-100.svg"
              alt="User"
              className="rounded-full"
            />
          </span>

          {/* User Info */}
          <span className="text-center">
            <span className="block mb-2 text-xl font-semibold text-black">
              Wumi Adeola
            </span>
            <span className="block font-normal text-base">Product Designer</span>
          </span>

       
        </div>
      </div>
    </>
  );
};

export default Profile;
