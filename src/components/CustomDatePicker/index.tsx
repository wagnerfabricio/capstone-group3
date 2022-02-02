import { Dispatch, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
registerLocale("ptBR", ptBR);

interface CustomDatePickerProps {
  handleNewDate: (data: Date | null) => void;
}
const CustomDatePicker = ({ handleNewDate }: CustomDatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(
    setHours(setMinutes(new Date(), 0), 9)
  );

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  console.log(startDate);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
    handleNewDate(date);
  };

  return (
    <DatePicker
      inline
      selected={startDate}
      filterDate={isWeekday}
      onChange={(date) => handleChange(date)}
      locale={ptBR}
      showTimeSelect
      timeFormat="p"
      timeIntervals={60}
      dateFormat="Pp"
      minDate={new Date()}
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 9),
        setHours(setMinutes(new Date(), 0), 10),
        setHours(setMinutes(new Date(), 0), 11),
        setHours(setMinutes(new Date(), 0), 13),
        setHours(setMinutes(new Date(), 0), 14),
        setHours(setMinutes(new Date(), 0), 15),
        setHours(setMinutes(new Date(), 0), 16),
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 0), 18),
      ]}
    />
  );
};

export default CustomDatePicker;
