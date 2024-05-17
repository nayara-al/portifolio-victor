'use client'
import React, { useState } from 'react';
import { ICurso } from '../../../../../data/cursos';

interface CursoListProps {
  cursos: ICurso[];
}

export default function DropDown({ cursos }: CursoListProps) {
  const [selectedCurso, setSelectedCurso] = useState<number | null>(null);

  return (
    <section className="w-full text-center bg-white text-black py-4">
      <div className='flex flex-col items-center justify-center'>
        {cursos.map((curso, index) => (
          <div key={index} className='w-[60vw] border-2 border-solid rounded-sm my-4 py-2'>
            <h2
              onClick={() => setSelectedCurso(index === selectedCurso ? null : index)}
              className='cursor-pointer font-bold'
            >
              {curso.curso}
            </h2>
            {selectedCurso === index && (
              <ul className=''>
                {curso.topicos.map((topico, i) => (
                  <li key={i}>{topico}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
