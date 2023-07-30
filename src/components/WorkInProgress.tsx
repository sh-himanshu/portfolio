import Image from "next/image";
import manAtWork from "../../public/man-at-work.png";

const WorkInProgress = () => {
  return (
    <div className="mx-auto flex h-screen max-w-2xl items-center justify-center px-2">
      <Image
        src={manAtWork}
        alt={"Site under maintenance"}
        className="pointer-events-none"
      />
    </div>
  );
};

export default WorkInProgress;
