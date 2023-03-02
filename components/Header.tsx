import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 z-50">
            {/* Left Section */}
            <div className="relative my-auto flex h-10 cursor-pointer items-center">
                <Image
                    src="https://links.papareact.com/qd3"
                    fill
                    className="object-contain object-left"
                    alt={""}
                />
            </div>
            {/* Middle Section */}
            <div className=""></div>
            {/* Right Section */}
            <div className=""></div>
        </header>
    );
}
