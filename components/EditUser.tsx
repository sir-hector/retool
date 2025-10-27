"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

const EditUser = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit user</SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default EditUser;
