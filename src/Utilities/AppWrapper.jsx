import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router";
import { PulseLoader } from "react-spinners";

const AppWrapper = ({ router }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PulseLoader color="#377cfb" size={15} margin={5} />
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

export default AppWrapper;
