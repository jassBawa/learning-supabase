"use client";
import supabase from "@/services/supabase";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const supaRes = async () => {
      let { data: users, error } = await supabase.from("users").select("*");
      console.log(users);
      if (users) setData(users);
      return users;
    };

    supaRes();
  }, []);
  return (
    <div>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}
