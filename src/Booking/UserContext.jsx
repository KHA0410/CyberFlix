// import { createContext, useContext, useState } from "react";
// // Giúp lưu trữ thông tin như 1 biến toàn cục bất kỳ component nào đều có thể gọi được như redux
// // Tạo và set up component
// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   // Tạo State để lưu trữ thông tin của user đang đăng nhập
//   const [currentUser, setCurrentUser] = useState(() => {
//     // Giá trị được return về là giá trị mặc định ban đầu của State như những lúc trước mình tạo State
//     const user = JSON.parse(localStorage.getItem("currentUser"));
//     return user || null;
//   });
//   const handleSignin = (user) => {
//     setCurrentUser(user);
//     localStorage.setItem("currentUser", JSON.stringify(user));
//   };
//   const handleSignout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("currentUser");
//   };
//   return (
//     <UserContext.Provider value={{ currentUser, handleSignin, handleSignout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => {
//   const value = useContext(UserContext);
//   return value;
// };

// export default UserProvider;
