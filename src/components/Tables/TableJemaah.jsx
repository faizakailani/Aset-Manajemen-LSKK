import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TableJemaah = ({ data }) => {
  return (
    <div className="my-3 border rounded-md p-3 overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr>
            <th className="p-5">No.</th>
            <th className="p-5">Nama Jemaah</th>
            <th className="p-5">Jenis Kelamin</th>
            <th className="p-5">Riwayat</th>
          </tr>
        </thead>
        <tbody>
          {/*eslint-disable-next-line react/prop-types*/}
          {data.map((item, i) => {
            return (
              <tr className="odd:bg-[#DFDFDF]" key={item.guid}>
                <td className="p-5">{i + 1}</td>
                <td className="p-5">{item.name}</td>
                <td className="p-5">{item.gender}</td>
                <td className="p-5">
                  <NavLink to={`/history/${item.guid}`}>
                    <Button size="sm">Lihat</Button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableJemaah;
