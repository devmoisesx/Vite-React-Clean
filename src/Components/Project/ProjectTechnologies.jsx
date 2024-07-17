import Line from "../Line";
import Text from "../Text/Text";
import Title from "../Text/Title";

function SobreProjeto({ technologies }) {
  return (
    <>
      <Title title={"3"} className={"text-center"}>
        Tecnologias utilizadas
      </Title>
      {/* <Line /> */}
      <Text className={"text-justify mt-5"}>{technologies}</Text>

      <div className="w-full flex flex-col items-start md:items-center gap-32 lg:grid grid-cols-[1fr_380px] mt-16 lg:mt-32">
        <div className="bg-[#818181] w-48 h-80 md:w-72 md:h-[30rem] rounded-[24px] relative shadow-2lg self-center md:self-auto -left-10 lg:left-0">
          <div className="bg-[#D9D9D9] w-48 h-80 md:w-72 md:h-[30rem] rounded-[24px] relative left-[80px] top-[80px] shadow-2lg"></div>
        </div>
        <div className="w-full">
          <Title
            title={"2"}
            className={" text-center lg:text-start font-extrabold italic"}
          >
            Responsivo
          </Title>
          <Title
            title={"2"}
            className={"text-center lg:text-start font-extrabold italic mb-5"}
          >
            Mobile First
          </Title>
          <Text className={"text-justify"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur? Harum, at neque! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore, consectetur? Harum, at neque! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dolore, consectetur?
            Harum, at neque!
          </Text>
        </div>
      </div>
    </>
  );
}

export default SobreProjeto;