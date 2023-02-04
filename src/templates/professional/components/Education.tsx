import { IEducation } from 'src/stores/index.interface';
import { dateParser } from 'src/helpers/utils';

export const Education = ({ education }: { education: IEducation[] }) => {
  return (
    <>
      {education.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="mt-3">
            <div>
              <div className="flex justify-between">
                <img
                  width={25}
                  height={12}
                  src="https://www.cyber-islam.eu/wp-content/uploads/2021/03/io-71.jpg"
                  alt="univercity-logo"
                />
                <p className="font-normal">
                  {item.studyType} - {item.area}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-normal">{item.institution}</p>
                <div className="flex gap-3">
                  <p className="text-xs">
                    {dateParser(item.startDate)} -
                    {item.isStudyingHere ? 'present' : dateParser(item.endDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
