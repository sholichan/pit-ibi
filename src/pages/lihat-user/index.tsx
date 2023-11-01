import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LihatPengunjung() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/report/users?page=1`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  //pagination function
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/report/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setPage(data.current_page);
        setLastPage(data.last_page);
        setTotal(data.total);
      });
  }, [page]);

  return (
    <div className="p-10 bg-white h-screen">
      <h1 className="text-3xl mb-3 text-gray-800">Daftar Pengunjung</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Kota</th>
              <th className="px-6 py-3">Whatsapp</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: any) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={user.id}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.name}
                </td>
                <td className="px-6 py-1">{user.email}</td>
                <td className="px-6 py-1">{user.kota}</td>
                <td className="px-6 py-1">{user.whatsapp}</td>
                <td className="px-6 py-1">
                  {/* button view */}
                  <button onClick={() => {
                    router.push(`/lihat-user/${user.id}`)
                  }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Showing {page} to {lastPage} of {total} Entries
          </p>
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
