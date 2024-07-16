import Line from "../Components/Line";
import Text from "../Components/Text";
import Title from "../Components/Title";

function Funcionalidades({ funcionalidades }) {
  return (
    <>
      <Title title={"3"}>Funcionalidades do site</Title>
      <Line />
      <Text className={"text-justify mt-5"}>{funcionalidades}</Text>

      <div className="">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-[250px_250px_250px] lg:grid-rows-2 gap-[20px] mt-[48px] lg:h-[500px]">
          <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] lg:row-span-2 shadow-2lg"></div>
          <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] shadow-2lg"></div>
          <div className="bg-[#D9D9D9] w-full h-full rounded-[24px] shadow-2lg"></div>
        </div>
      </div>
    </>
  );
}

export default Funcionalidades;
