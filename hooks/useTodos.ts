"use client"
import supabase from "@/services/supabase"
import useSWR from 'swr'

const fetcher = async() => {
    const {data, error} = await supabase.from('todos').select("*");

    if(error){
        throw new Error("Failed to fetch todos");
    }
    return data;
}

const useTodos = () => {
    const {data: todos, error, isLoading, mutate} = useSWR('/todos', fetcher);

    return {
        todos,
        isLoading,
        error,
        mutate
    }
    
}

export default useTodos;