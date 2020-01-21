import React from 'react';


 const Food = ({label, ENERC_KCAL, PROCNT, FAT, CHOCDF }) => {

    return (
      <tr>
        <td>{label}</td>
        <td>{CHOCDF ? Math.ceil(CHOCDF) : null}</td>
        <td>{PROCNT ? Math.ceil(PROCNT) : null}</td>
        <td>{FAT ? Math.ceil(FAT) : null}</td>
        <td>{ENERC_KCAL ? Math.ceil(ENERC_KCAL) : null}</td>
      </tr>
    )
}

export default Food
