// import { useState, createContext, useContext } from "react";
// import { getTopUsers } from "../apis/userData";

// const Context = createContext();

// function TopUsersProvider({ children }) {
//   const [topUsers, setTopUsers] = useState([]);

//   useEffect(() => {
//     const topUsers = async () => {
//       try {
//         const { data } = await getTopUsers();
//         setTopUsers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     topUsers();
//   }, []);

//   return (
//     <TopUsersContext.Provider value={{ topUsers, setTopUsers }}>
//       {children}
//     </TopUsersContext.Provider>
//   );
// }

// export { TopUsersProvider, Context };
