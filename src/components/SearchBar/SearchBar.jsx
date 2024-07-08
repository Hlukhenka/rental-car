// import { useState } from 'react';
// import data from '../../data/makes.json';
// import price from '../../data/price.json';

// const SearchBar = () => {
//   return (
//     <form>
//       <label>for makes</label>
//       <select defaultValue="">
//         <option value="" disabled>
//           Choose
//         </option>
//         {data.map((el, id) => {
//           return (
//             <option key={id} value="Select an option">
//               {el}
//             </option>
//           );
//         })}
//       </select>

//       <label>price</label>
//       <select defaultValue="">
//         <option value="" disabled>
//           Choose
//         </option>
//         {price.map((el, id) => {
//           return (
//             <option key={id} value="Select an option">
//               {el}
//             </option>
//           );
//         })}
//       </select>

//       <label>milage</label>
//       <input placeholder="from" />
//       <input placeholder="to" />
//       <button type="submit">Search</button>
//     </form>
//   );
// };
// export default SearchBar;
