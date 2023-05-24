// import { fetchData } from "../../../utils/api";
// import { getTicketTypes, getBookings, getTicketsSummary } from "../services";

// // Mock fetchData function
// jest.mock("../../../utils/api", () => ({
//   fetchData: jest.fn(),
// }));


// describe("API Event Dashboard utility functions", () => {
//     describe("getTicketTypes", () => {
//         it("should return ticket types for a valid event ID", async () => {
//             // Mock response data for fetchData function
//             const mockResponse = {
//             data: {
//                 tickets: [
//                 {
//                     type: "General Admission",
//                     price: 10,
//                     currentReservations: 50,
//                     capacity: 100,
//                 },
//                 {
//                     type: "VIP",
//                     price: 50,
//                     currentReservations: 20,
//                     capacity: 30,
//                 },
//                 ],
//             },
//             };

//             // Set up mock implementation for fetchData function
//             fetchData.mockImplementation(async () => {
//             return mockResponse;
//             });

//             // Call getTicketTypes function with a valid event ID
//             const result = await getTicketTypes(1);

//             // Check if the function returns the correct ticket types
//             expect(result).toEqual([
//             ["General Admission", 10, "50/100"],
//             ["VIP", 50, "20/30"],
//             ]);
//         });

//         it("should return an empty array for an invalid event ID", async () => {
//             // Mock response data for fetchData function
//             const mockResponse = {
//             status: "fail",
//             };

//             // Set up mock implementation for fetchData function
//             fetchData.mockImplementation(async () => {
//             return mockResponse;
//             });

//             // Call getTicketTypes function with an invalid event ID
//             const result = await getTicketTypes(-1);

//             // Check if the function returns an empty array
//             expect(result).toEqual([[]]);
//         });
//     });

//     describe("getBookings", () => {
//         it("should return bookings for a valid event ID", async () => {
//             // Mock response data for fetchData function
//             const mockResponse = {
//             data: {
//                 bookings: [
//                 {
//                     bookingID: 1,
//                     name: {
//                     firstName: "John",
//                     lastName: "Doe",
//                     },
//                     price: 10,
//                 },
//                 {
//                     bookingID: 2,
//                     name: {
//                     firstName: "Jane",
//                     lastName: "Doe",
//                     },
//                     price: 20,
//                 },
//                 ],
//             },
//             };

//             // Set up mock implementation for fetchData function
//             fetchData.mockImplementation(async () => {
//             return mockResponse;
//             });

//             // Call getBookings function with a valid event ID
//             const result = await getBookings(1);

//             // Check if the function returns the correct bookings
//             expect(result).toEqual([
//             [1, "John Doe", 1, 10, "2020-01-01"],
//             [2, "Jane Doe", 1, 20, "2020-01-01"],
//             ]);
//         });

//         it("should return an empty array for an invalid event ID", async () => {
//             // Mock response data for fetchData function
//             const mockResponse = {
//             status: "fail",
//             };

//             // Set up mock implementation for fetchData function
//             fetchData.mockImplementation(async () => {
//             return mockResponse;
//             });

//             // Call getBookings function with an invalid event ID
//             const result = await getBookings(-1);

//             // Check if the function returns an empty array
//             expect(result).toEqual([[]]);
//         });
//     });
//     describe("getTicketsSummary", () => {
//         it("should return ticket summary for a valid event ID", async () => {
//           // Mock response data for fetchData function
//           const mockResponse = {
//             data: {
//               tickets: [
//                 {
//                   type: "General Admission",
//                   price: 10,
//                   currentReservations: 50,
//                   capacity: 100,
//                 },
//                 {
//                   type: "VIP",
//                   price: 50,
//                   currentReservations: 20,
//                   capacity: 30,
//                 },
//                 {
//                   type: "Free",
//                   price: 0,
//                   currentReservations: 100,
//                   capacity: 100,
//                 },
//               ],
//             },
//           };
      
//           // Set up mock implementation for fetchData function
//           fetchData.mockImplementation(async () => {
//             return mockResponse;
//           });
      
//           // Call getTicketsSummary function with a valid event ID
//           const result = await getTicketsSummary(1);
      
//           // Check if the function returns the correct ticket summary
//           expect(result).toEqual({
//             totalSoldTickets: 170,
//             totalTickets: 230,
//             totalSoldFreeTickets: 100,
//             totalSoldPaidTickets: 70,
//           });
//         });
      
//         it("should return empty object if no data is returned from API", async () => {
//           // Set up mock implementation for fetchData function
//           fetchData.mockImplementation(async () => {
//             return null;
//           });
      
//           // Call getTicketsSummary function with an invalid event ID
//           const result = await getTicketsSummary(1);
      
//           // Check if the function returns an empty object
//           expect(result).toEqual({});
//         });
      
//         it("should return empty object if API returns 'fail' status", async () => {
//           // Mock response data for fetchData function
//           const mockResponse = {
//             status: "fail",
//           };
      
//           // Set up mock implementation for fetchData function
//           fetchData.mockImplementation(async () => {
//             return mockResponse;
//           });
      
//           // Call getTicketsSummary function with a valid event ID
//           const result = await getTicketsSummary(1);
      
//           // Check if the function returns an empty object
//           expect(result).toEqual({});
//         });
//       });
      

// });
