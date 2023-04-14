const now = new Date(2023, 3, 14); // Friday, April 14, 2023
const dayOfWeek = now.getDay();
console.log(dayOfWeek)
const diff = dayOfWeek === 5 ? 0 : dayOfWeek === 6 ? 0 : 5 - dayOfWeek;
const firstDayOfWeekend = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
const lastDayOfWeekend = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff + 1);
const startDate = firstDayOfWeekend.toISOString().slice(0, 10);
let endDate= new Date()
if (dayOfWeek === 6) { endDate = startDate}
else { endDate = lastDayOfWeekend.toISOString().slice(0, 10);}
expect(startDate).toBe('2023-04-14');
expect(endDate).toBe('2023-04-15');




