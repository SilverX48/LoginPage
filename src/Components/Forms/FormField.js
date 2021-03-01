function FormField({ type, id, fname, onChange, caption, value, error, ...attr}){
  let myClasses = [
    "p-3",
  ];

  let myClasses2 = [
      "w-full",
      "flex flex-col",
      "items-center",
      "justify-center",
      "px-8",
      "py-4",
      "my-4",
      "border",
      "border-transparent",
      "text-base",
      "font-medium",
      "rounded-lg",
      "md:py-4",
      "md:text-lg",
      "md:px-10"
    ];

    return (
      <section className={myClasses2.join(" ")}>
        <label className={myClasses.join(" ")}>{caption}</label>
        <input
            type={type}
            id={id}
            name={fname}
            onChange={onChange}
            value={value}
            {...attr}
        />
          {(error && true) ? (<section>{error}</section>):null }
      </section>
    )
  }
  
  export default FormField;