import React, { useState } from 'react';

export default function Navigation() {
    const [show, setShow] = useState(false);
    return <nav
        className="flex justify-center items-center fixed top-0 left-0 w-full z-20 bg-bg-rgba"
    >
        <div
            className="w-full max-w-[1080px] px-[20px] flex items-center justify-between py-[15px]"
        >
            <h1 className="text-lg font-medium">Alexis Gonzalez</h1>
            <ul
                className={`flex items-center gap-[20px] ${show ? "" : "max-[800px]:hidden"} max-[800px]:absolute max-[800px]:right-2 max-[800px]:top-[64px] max-[800px]:flex-col max-[800px]:items-start max-[800px]:w-[200px] max-[800px]:bg-black max-[800px]:p-4`}
            >
                <li>
                    <a
                        href="#home"
                        className="hover:opacity-100 opacity-70"
                        style={{ transition: 'all ease 400ms' }}>Inicio</a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="hover:opacity-100 opacity-70"
                        style={{ transition: 'all ease 400ms' }}>Sobre mi</a>
                </li>
                <li>
                    <a
                        href="#skills"
                        className="hover:opacity-100 opacity-70"
                        style={{ transition: 'all ease 400ms' }}>Habilidades</a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="hover:opacity-100 opacity-70"
                        style={{ transition: 'all ease 400ms' }}>Contacto</a>
                </li>
            </ul>
            <div onClick={() => setShow(!show)} className="cursor-pointer opacity-70 min-[800px]:hidden">
                Mostrar menu
            </div>
        </div>
    </nav>
}