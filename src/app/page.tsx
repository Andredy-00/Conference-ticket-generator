/* import Form from './ui/crate-form'; */

import Form from "./ui/crate-form";
import Header from "./ui/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full p-5">
      <Header/>
      </div>
      <Form/>
    </div>
      
  );
}
