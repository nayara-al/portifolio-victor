import Image from "next/image";
export default function TechStack() {
  return (
    <section className="flex justify-center flex-col items-center p-6 gap-8">
      <h3 className="text-cinza text-xl font-bold leading-10 underline underline-offset-8">Tech Stack</h3>
      <div className="flex gap-6 items-center justify-center max-sm:flex-wrap">
        <Image src="/icons/AndroidStudio.svg" alt="" width={60} height={60}/>
        <Image src="/icons/jetpack.svg" alt="" width={60} height={60}/>
        <Image src="/icons/Kotlin_Icon.svg" alt="" width={60} height={60}/>
        <Image src="/icons/Git.svg" alt="" width={60} height={60}/>
        <Image src="/icons/Figma-Dark.svg" alt="" width={60} height={60}/>
      </div>
    </section>
  );
}
