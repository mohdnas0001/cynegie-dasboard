import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <>
      <div className="p-4 sm:p-6">
        <div className="flex mt-2 items-center flex-col gap-4">
          {/* Circle wrapper around image */}
          <span className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full border-2 sm:border-4 border-primary500 flex items-center justify-center">
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
            <span className="block mb-[1px] sm:mb-2 text-lg sm:text-lg lg:text-lg font-semibold text-black">
              Wumi Adeola
            </span>
            <span className="block font-normal text-sm sm:text-base lg:text-base">
              Product Designer
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
