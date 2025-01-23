import Image from "next/image";
import logoFull from "../../../public/assets/images/logo-full.svg";
import ticket from "../../../public/assets/images/pattern-ticket.svg";
import avatar from "../../../public/assets/images/image-avatar.jpg";

export default function Ticket() {
  return (
    <div className="min-h-screen">
      <div className="grid gap-5 place-items-center text-center p-5 pt-10">
        <Image src={logoFull} alt="Coding Conf" />
        <h1 className="font-color-h1 capitalize text-2xl font-bold pt-2">
          congrats, <span className="text-red-300">jonatan</span> <br />{" "}
          <span className="text-red-300">kristof!</span> your ticket is <br />{" "}
          ready.
        </h1>
        <p className="font-color-p ">
          We've emailed your ticket to <br />
          <span className="text-red-300">jonatan@email.com</span> and will send{" "}
          <br />
          updates in the run up to the event.
        </p>
      </div>

      {/* Ticket */}
      <div className="p-5 pt-10 bg-ticket w-full grid gap-7">
        {/* Logo y fecha */}
        <div className="text-center grid gap-2">
          <Image src={logoFull} alt="Coding Conf" />
          <p className="capitalize font-color-p">jan 31, 2025 / austin, tx</p>
        </div>
        {/* Avatar, Nombre y correo */}
        <div className="flex">
          <Image
            src={ avatar }
            alt="Avatar"
            width={40}

          />
          <div>
            <h2 className="font-color-h1 capitalize">Jonatan Kristof</h2>
            <div className="flex">
              <Image src="" alt="" />
              <p className="font-color-p">@jonatankristof0101</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
