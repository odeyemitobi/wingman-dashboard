import { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface Order {
  id: number;
  product: string;
  date: string;
  time: string;
  timeSpent: string;
  orderValue: number;
  commission: number;
}

type SortField = keyof Omit<Order, "id" | "time">;
type SortDirection = "asc" | "desc";

export default function OrdersTable() {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const orders: Order[] = [
    {
      id: 1,
      product: "Premium Headphones",
      date: "24 Apr 2024",
      time: "10:34 AM",
      timeSpent: "2h 5m",
      orderValue: 120.21,
      commission: 55,
    },
    // Add more mock data here
  ];

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (field !== sortField) return <FaSort />;
    return sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              {["product", "date", "timeSpent", "orderValue", "commission"].map(
                (field) => (
                  <th
                    key={field}
                    className="px-6 py-3 text-left text-gray-500 cursor-pointer"
                    onClick={() => handleSort(field as SortField)}
                  >
                    <div className="flex items-center gap-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                      {getSortIcon(field as SortField)}
                    </div>
                  </th>
                )
              )}
              <th className="px-6 py-3 text-left text-gray-500"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4">
                  <div>{order.date}</div>
                  <div className="text-gray-500 text-sm">{order.time}</div>
                </td>
                <td className="px-6 py-4">{order.timeSpent}</td>
                <td className="px-6 py-4">${order.orderValue}</td>
                <td className="px-6 py-4">${order.commission}</td>
                <td className="px-6 py-4">
                  <button className="text-teal-600">View Chat</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between items-center px-6 py-4 border-t">
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
