import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "s@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "x@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "success",
      email: "m@example.com",
      username: "John Doe",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();

  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
