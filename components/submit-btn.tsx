"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="btn-primary disabled:opacity-50">
      {pending ? (
        <span className="inline-block h-4 w-4 rounded-full border-2 border-bg/30 border-t-bg animate-spin" />
      ) : (
        <>
          Send message
          <HiOutlineArrowUpRight />
        </>
      )}
    </button>
  );
}
