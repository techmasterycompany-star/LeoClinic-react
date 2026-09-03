import React from "react";
import Sidebar from "../../components/AdminDashboardSidebar1";
import Navbar from "../../components/AdminDrProfileNavbar";

const stats = [
  {
    title: "Total Revenue",
    value: "$328,450.00",
    change: "+10.5%",
    icon: "$",
  },
  {
    title: "Pending Payments",
    value: "$18,240.00",
    change: "-3.4%",
    icon: "◷",
  },
  {
    title: "Net Profit",
    value: "$142,800.00",
    change: "+5.2%",
    icon: "↗",
  },
];

const invoices = [
  {
    id: "#INV-001",
    name: "Robert Fox",
    phone: "+1 234 567 890",
    amount: "$450.00",
    method: "Visa",
    date: "12 Jan 2026",
    status: "Overdue",
  },
  {
    id: "#INV-002",
    name: "Jane Cooper",
    phone: "+1 345 678 901",
    amount: "$250.00",
    method: "Cash",
    date: "15 Jan 2026",
    status: "Paid",
  },
  {
    id: "#P-003",
    name: "Cody Fisher",
    phone: "+1 456 789 012",
    amount: "56 / Male",
    method: "Insurance",
    date: "18 Jan 2026",
    status: "IN Treatment",
  },
];

function StatCard({ title, value, change, icon }) {
  return (
    <div className="flex-1 min-w-0 h-[172px] p-6 bg-white rounded-[24px] shadow-[0_0_4px_0_#00000040] flex flex-col justify-between box-border">
      <div className="w-full flex items-center justify-between">
        {/* Icon */}
        <div className="w-8 h-8 rounded-lg bg-[#F0F2F8] flex items-center justify-center text-[#1738C7] text-sm font-semibold">
          {icon}
        </div>

        <div className="flex items-center gap-1 text-[#18A87A] text-[11px] font-semibold">
          <span>↗</span>
          <span>{change}</span>
        </div>
      </div>

      <div className="flex flex-col gap-[5px]">
        <p className="m-0 text-[10px] text-[#555B68]">{title}</p>

        <h3 className="m-0 text-[17px] font-bold text-[#606776]">{value}</h3>
      </div>
    </div>
  );
}

function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 70, expense: 42 },
    { month: "Feb", revenue: 90, expense: 50 },
    { month: "Mar", revenue: 108, expense: 60 },
    { month: "Apr", revenue: 122, expense: 68 },
    { month: "May", revenue: 98, expense: 55 },
    { month: "Jun", revenue: 114, expense: 64 },
  ];

  return (
    <div className="flex-1 min-w-0 h-[280px] p-5 bg-white rounded-2xl box-border">
      <h3 className="m-0 text-[12px] font-bold text-[#242832]">
        Revenue vs Expenses
      </h3>

      <div className="w-full h-[190px] mt-5 px-2 flex items-end justify-around box-border">
        {data.map((item) => (
          <div
            key={item.month}
            className="h-[180px] flex flex-col justify-end items-center gap-2"
          >
            <div className="h-[145px] flex items-end gap-[3px]">
              <div
                className="w-3 bg-[#102FB7] rounded-t-[4px]"
                style={{
                  height: `${item.revenue}px`,
                }}
              />

              <div
                className="w-3 bg-[#0087C9] rounded-t-[4px]"
                style={{
                  height: `${item.expense}px`,
                }}
              />
            </div>

            <span className="text-[9px] text-[#6E7582]">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CashFlowChart() {
  return (
    <div className="flex-1 min-w-0 h-[280px] p-5 bg-white rounded-2xl box-border">
      <h3 className="m-0 text-[12px] font-bold text-[#242832]">Cash Flow</h3>

      <div className="w-full h-[190px] mt-5 flex items-center">
        <svg
          viewBox="0 0 500 190"
          preserveAspectRatio="none"
          className="w-full h-[190px] overflow-visible text-[#0C2BB8]"
        >
          <path
            d="
              M 15 165
              C 45 150, 55 140, 75 118
              C 95 95, 115 82, 140 72
              C 165 62, 190 66, 220 54
              C 250 42, 265 18, 300 10
              C 340 1, 365 -5, 400 -18
              C 430 -28, 455 -35, 485 -42
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  let classes = "";

  if (status === "Overdue") {
    classes = "bg-[#FFE5E5] text-[#FF5C5C]";
  }

  if (status === "Paid") {
    classes = "bg-[#E2F5EB] text-[#31A66D]";
  }

  if (status === "IN Treatment") {
    classes = "bg-[#E2EFFF] text-[#3287D8]";
  }

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        min-w-[81px]
        h-6
        px-2
        rounded-[5px]
        text-[10px]
        ${classes}
      `}
    >
      {status}
    </span>
  );
}

function Billing() {
  const [search, setSearch] = React.useState("");
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [filterId, setFilterId] = React.useState("");
  const [filterDate, setFilterDate] = React.useState("");

  const filteredInvoices = invoices.filter((invoice) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      invoice.id.toLowerCase().includes(searchValue) ||
      invoice.name.toLowerCase().includes(searchValue) ||
      invoice.phone.toLowerCase().includes(searchValue);

    const matchesId =
      filterId === "" ||
      invoice.id.toLowerCase().includes(filterId.toLowerCase());

    const matchesDate =
      filterDate === "" ||
      invoice.date.toLowerCase().includes(filterDate.toLowerCase());

    return matchesSearch && matchesId && matchesDate;
  });

  return (
    <div className="w-full h-screen flex bg-[#F7F8FC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 min-w-0 h-full flex flex-col">
        <Navbar />

        <main className="flex-1 min-w-0 overflow-y-auto bg-[#F7F8FC]">
          <div className="w-full min-w-0 min-h-full px-8 py-6 flex flex-col gap-6 box-border">
            <section className="w-full h-[180px] p-1 flex gap-5 box-border shrink-0">
              {stats.map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                />
              ))}
            </section>

            <section className="w-full h-[280px] flex gap-5 shrink-0">
              <RevenueChart />

              <CashFlowChart />
            </section>

            <section className="w-full min-h-[358px] p-4 bg-white rounded-2xl box-border shrink-0">
              <div className="w-full flex items-start justify-between mb-3">
                <div className="pt-1">
                  <h3 className="m-0 mb-1 text-[17px] font-bold text-[#252A35]">
                    Recent Invoices
                  </h3>

                  <p className="m-0 text-[12px] text-[#9AA0AB]">
                    View and manage latest billing transactions
                  </p>
                </div>

                <div className="flex items-center gap-[10px] relative">
                  <div className="w-[250px] h-9 px-3 flex items-center gap-2 border border-[#E1E4EA] rounded-full box-border">
                    <span className="text-[19px] text-[#A8ADB8] leading-none">
                      ⌕
                    </span>

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search..."
                      className="w-full h-full outline-none border-none text-[12px] text-[#4C5260] placeholder:text-[#A8ADB8] bg-transparent"
                    />
                  </div>

                  <button
                    onClick={() => setFilterOpen(!filterOpen)}
                    className={`
                      h-9
                      px-[14px]
                      flex
                      items-center
                      gap-[7px]
                      rounded-full
                      text-[12px]
                      cursor-pointer
                      transition
                      ${
                        filterOpen
                          ? "bg-[#EEF2FF] border border-[#C9D2FF] text-[#1738C7]"
                          : "bg-[#F8F9FC] border border-[#EDF0F5] text-[#555B68]"
                      }
                    `}
                  >
                    <span className="text-[13px]">▽</span>
                    Filter
                  </button>

                  {filterOpen && (
                    <div className="absolute right-[125px] top-[46px] z-20 w-[240px] p-4 bg-white border border-[#E8EAF0] rounded-xl shadow-[0_5px_20px_0_#00000015]">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-semibold text-[#555B68]">
                            Invoice ID
                          </label>

                          <input
                            type="text"
                            value={filterId}
                            onChange={(e) => setFilterId(e.target.value)}
                            placeholder="e.g. INV-001"
                            className="w-full h-8 px-3 border border-[#E3E6EC] rounded-lg outline-none text-[12px] text-[#555B68] placeholder:text-[#A8ADB8]"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-semibold text-[#555B68]">
                            Date
                          </label>

                          <input
                            type="text"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            placeholder="e.g. 12 Jan 2026"
                            className="w-full h-8 px-3 border border-[#E3E6EC] rounded-lg outline-none text-[12px] text-[#555B68] placeholder:text-[#A8ADB8]"
                          />
                        </div>

                        <button
                          onClick={() => {
                            setFilterId("");
                            setFilterDate("");
                          }}
                          className="w-full h-8 rounded-lg bg-[#F3F4F7] border-none text-[12px] text-[#555B68] cursor-pointer"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  )}

                  <button className="h-9 px-4 flex items-center gap-[7px] border-none rounded-full bg-[#0826B7] text-white text-[13px] cursor-pointer">
                    <span className="text-lg leading-none">+</span>
                    Add Invoice
                  </button>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[850px] table-fixed border-collapse">
                  <thead>
                    <tr className="h-[29px] bg-[#F6F7FA]">
                      <th className="w-[13%] px-[10px] text-left text-[11px] font-medium text-[#777E8B]">
                        INVOICE ID
                      </th>

                      <th className="w-[21%] px-[10px] text-left text-[11px] font-medium text-[#777E8B]">
                        PATIENT
                      </th>

                      <th className="w-[13%] px-[10px] text-left text-[11px] font-medium text-[#777E8B]">
                        AMOUNT
                      </th>

                      <th className="w-[13%] px-[10px] text-left text-[11px] font-medium text-[#777E8B]">
                        METHOD
                      </th>

                      <th className="w-[13%] px-[10px] text-left text-[11px] font-medium text-[#777E8B]">
                        DATE
                      </th>

                      <th className="w-[13%] px-[10px] text-left text-[11px] font-medium text-[#777E8B]">
                        STATUS
                      </th>

                      <th className="w-[10%] px-[10px] text-left text-[11px] font-medium text-[#777E8B]">
                        ACTION
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredInvoices.length > 0 ? (
                      filteredInvoices.map((invoice) => (
                        <tr
                          key={invoice.id}
                          className="h-[52px] border-b border-[#F1F2F5]"
                        >
                          <td className="px-[10px] text-[11px] text-[#737A87]">
                            {invoice.id}
                          </td>

                          <td className="px-[10px]">
                            <div className="flex items-center gap-2">
                              <div className="w-[23px] h-[23px] shrink-0 rounded-full bg-[#DEDFE2]" />

                              <div className="flex flex-col gap-[2px]">
                                <span className="text-[11px] font-medium text-[#555B66]">
                                  {invoice.name}
                                </span>

                                <span className="text-[10px] text-[#A4A9B2]">
                                  {invoice.phone}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="px-[10px] text-[11px] text-[#737A87]">
                            {invoice.amount}
                          </td>

                          <td className="px-[10px] text-[11px] text-[#737A87]">
                            {invoice.method}
                          </td>

                          <td className="px-[10px] text-[11px] text-[#737A87]">
                            {invoice.date}
                          </td>

                          <td className="px-[10px]">
                            <StatusBadge status={invoice.status} />
                          </td>

                          <td className="px-[10px]">
                            <div className="flex items-center gap-2">
                              <button
                                title="Edit invoice"
                                className="w-[22px] h-[22px] rounded-[6px] border-none bg-[#E3F5EC] text-[#43AD7B] flex items-center justify-center text-[13px] cursor-pointer hover:bg-[#D3EFE2]"
                              >
                                ↗
                              </button>

                              <button
                                title="Delete invoice"
                                className="w-[22px] h-[22px] rounded-[6px] border-none bg-[#FFE7E7] text-[#FF6262] flex items-center justify-center text-[13px] cursor-pointer hover:bg-[#FFDADA]"
                              >
                                ♙
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="h-[150px] text-center text-[13px] text-[#9AA0AB]"
                        >
                          No invoices found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Billing;
