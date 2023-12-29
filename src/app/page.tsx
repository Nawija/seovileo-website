export default function Home() {
  return (
    <div className="anim-opacity">
      <div className=" flex-c mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 py-12 text-center">
        <small className="mb-2 text-sm tracking-[0.5rem] text-black">
          WEB DEVELOPMENT
        </small>
        <h1 className="mx-auto max-w-screen-lg text-3xl font-medium lg:text-5xl">
          Strony Internetowe Oparte Na{" "}
          <span className="text-main-color">Najnowszych Trendach</span>{" "}
          Technologicznych
        </h1>
        <p className="mt-12 opacity-80">
          Witaj na mojej stronie internetowej, gdzie jako jednoosobowy developer
          stawiam na najnowsze trendy technologiczne. Jako pasjonat
          programowania i projektowania, dedykuję się tworzeniu stron
          internetowych, które nie tylko odzwierciedlają moje umiejętności, ale
          również są zgodne z najnowszymi osiągnięciami w dziedzinie technologii
          internetowej. Tutaj znajdziesz moje projekty, które są rezultatem
          nieustannego poszukiwania nowości oraz dbałości o jakość wykonania.
        </p>
      </div>
      <div className="h-96 w-full border bg-white"></div>
    </div>
  );
}
