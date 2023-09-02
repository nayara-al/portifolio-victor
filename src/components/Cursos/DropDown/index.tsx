"use client";
import React, { useEffect, useState } from "react";

interface ICurso {
  curso: string;
  topicos: string[];
}

interface CursoListProps {
  cursos: ICurso[];
}

const Dropdown: React.FC<CursoListProps> = ({ cursos }) => {
  return (
    <div className="flex flex-col items-center m-4">
      {cursos.map((curso, index) => (
        <div key={index} className="border rounded-lg border-solid border-gray-600 broder-10 mb-4 w-[620px] py-2">
          <h2 className="cursor-pointer ">
            {curso.curso}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
