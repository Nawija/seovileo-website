"use client";

import { MainBtn } from "@/src/ui/buttons/MainBtn";
import React, { useState } from "react";

export default function OfertaPage() {
  const initialValues = Array(10).fill(null);
  const [values, setValues] = useState(initialValues);

  const totalValue = values.reduce((acc, cur) => acc + (cur || 0), 0);

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryIndex: number,
  ) => {
    const { value } = event.target;
    setValues((prevValues) => [
      ...prevValues.slice(0, categoryIndex),
      parseInt(value),
      ...prevValues.slice(categoryIndex + 1),
    ]);
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryIndex: number,
  ) => {
    const { value, checked } = event.target;
    setValues((prevValues) => [
      ...prevValues.slice(0, categoryIndex),
      checked ? parseInt(value) : null,
      ...prevValues.slice(categoryIndex + 1),
    ]);
  };

  return (
    <div className="anim-opacity opacityAnimation relative mx-auto mb-6 flex flex-wrap items-start justify-center">
      <div className="relative flex w-full flex-col items-center justify-center pt-48 text-7xl font-semibold text-white">
        <p>Wypełnij Formularz</p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1545091741-2231068f3478?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="..."
        className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
      />

      <form
        className="z-20 mt-[45vh] rounded-lg border bg-gray-100 p-6 text-black shadow-xl md:mt-[30vh]"
        action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
        method="post"
        accept-charset="UTF-8"
      >
        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Jakiej usługi potrzebujesz?</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="radio"
                name="PageType"
                value="2400"
                checked={values[0] === 2400}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Fotograf ślubny
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="PageType"
                value="900"
                checked={values[0] === 900}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Reportaz Chrztu
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="PageType"
                value="500"
                checked={values[0] === 500}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Sesja indywidualna
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="PageType"
                value="700"
                checked={values[0] === 700}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Studniówka
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start px-1 py-3">
          <label className="mb-1 font-semibold" htmlFor="t1">
            Opisz swoją wizję
          </label>
          <textarea
            className="mr-2 h-24 w-full rounded-lg border px-4 py-3"
            id="t1"
            name="OpisFirmy"
          />
        </div>
        <div className="flex flex-col items-start justify-start px-1 py-3">
          <label className="mb-1 font-semibold" htmlFor="t4">
            Posiadasz identyfikację wizualną firmy?
          </label>
          <textarea
            className="mr-2 h-24 w-full rounded-lg border px-4 py-3"
            id="t4"
            name="IdentyfikacjaFirmy"
          />
          <p className="mt-1 px-1 text-sm text-gray-700 md:w-[80%]">
            Opisz czy posiadasz kolory firmowe, logo lub wykonane grafiki jak
            wizytówki czy grafiki socialmedia. Będzie to miało wpływ na
            ujednolicenie strony z Twoją marką.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start px-1 py-3">
          <label className="mb-1 font-semibold" htmlFor="t5">
            Wygląd strony - Inspirację
          </label>
          <textarea
            className="mr-2 h-24 w-full rounded-lg border px-4 py-3"
            id="t5"
            placeholder="Pomoze okreslic wyglad strony internetowej"
            name="Inspiracja"
          />
          <p className="mt-1 px-1 text-sm text-gray-700 md:w-[80%]">
            Jeżeli istnieją strony, które Ci się podobają to załącz powyżej
            linki do nich lub skorzystaj z takich źródeł inspiracji jak{" "}
          </p>
        </div>

        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Wydrukowanie Zdjęć?</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="radio"
                name="Domena"
                value="70"
                checked={values[1] === 70}
                onChange={(e) => handleRadioChange(e, 1)}
              />
              Tak
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="Domena"
                value="0"
                checked={values[1] === 0}
                onChange={(e) => handleRadioChange(e, 1)}
              />
              Nie
            </label>
          </div>
        </div>

        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Album z zdjęciami?</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="radio"
                name="Hosting"
                value="200"
                checked={values[2] === 200}
                onChange={(e) => handleRadioChange(e, 2)}
              />
              Tak
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="Hosting"
                value="0"
                checked={values[2] === 0}
                onChange={(e) => handleRadioChange(e, 2)}
              />
              Nie
            </label>
          </div>
        </div>

        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Opcje dodatkowe:</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="checkbox"
                name="Sekcja Blog"
                value="100"
                checked={values[4] === 100}
                onChange={(e) => handleCheckboxChange(e, 4)}
              />
              Prezent niespodzianka
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="checkbox"
                name="Sekcja News"
                value="100"
                checked={values[5] === 100}
                onChange={(e) => handleCheckboxChange(e, 5)}
              />
              Dodatkowye ujęcia
            </label>
            <label>
              <input
                className="mr-2 scale-110"
                type="checkbox"
                name="Formularz Kontaktowy"
                value="50"
                checked={values[6] === 50}
                onChange={(e) => handleCheckboxChange(e, 6)}
              />
              Zdjęcia w wersji B&W i kolorowej
            </label>
            <label>
              <input
                className="mr-2 scale-110"
                type="checkbox"
                name="Mapa Google 2D/3D"
                value="50"
                checked={values[7] === 50}
                onChange={(e) => handleCheckboxChange(e, 7)}
              />
              Licencja na wykorzystanie zdjęć w celu komercyjnym
            </label>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between px-1 md:mt-16">
          <p className="w-max font-semibold text-green-700">
            Cena: {totalValue}
          </p>
          <MainBtn className="btn-main px-4 py-2">Wyślij Formularz</MainBtn>
        </div>
      </form>
    </div>
  );
}
