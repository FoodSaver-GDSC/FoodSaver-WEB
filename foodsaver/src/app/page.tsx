'use client'
import Image from "next/image";
import Layout from "./layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  ingred: string
}

type ingredient = {
  id: number,
  name: string
}

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const [ingredients, setIngredients] = useState<ingredient[]>([])

  const onValid: SubmitHandler<FormValues> = ({ ingred }) => {
    if (ingred) {
      const ingredient = {
        id: Math.random(),
        name: ingred
      }
      setIngredients((prev) => [
        ...prev,
        ingredient
      ])
      reset()
    }
    console.log(ingredients)
  }

  const deleteIng = (id: number) => {
    console.log(id)
    setIngredients(ingredients.filter((ingre) => ingre.id !== id))

  }
  return (
    <div className="" >
      <form onSubmit={handleSubmit(onValid)} className="w-full">
        <input className="outline-none border border-borderColor w-full p-2 rounded-full pl-4 placeholder:text-borderColor focus:outline-mainColor bg-white"
          {...register("ingred")}
          placeholder="남는 재료를 입력해주세요!" />

        <div className="py-10 px-4">
          <div className="relative">
            <p className="absolute -top-3 bg-white px-2">
              재료
            </p>
            <hr className=" border-borderColor" />
          </div>
          <div className="mt-1">
            {ingredients?.map(ingre =>
              <div className="px-10 text-xl border-b border-borderColor py-2 flex justify-between">
                <div>
                  {ingre.name}
                </div>
                <div onClick={() => deleteIng(ingre.id)} className="btn btn-xs btn-circle btn-outline border-borderColor text-borderColor ">
                  x
                </div>

              </div>
            )}
          </div>
        </div>

      </form>

      <div className="flex justify-center">
        <button className=" btn bg-white border rounded-full px-6 border-mainColor text-mainColor hover:bg-mainColor hover:text-white hover:border-mainColor">레시피 생성하기</button>
      </div>
    </div>
  );
}
