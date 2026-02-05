import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    images: string[];
    index: number;
    setIndex: (n: number) => void;
    close: () => void;
}

export default function Lightbox({ images, index, setIndex, close }: Props) {
    const prev = () => setIndex((index - 1 + images.length) % images.length);
    const next = () => setIndex((index + 1) % images.length);

    useEffect(() => {
        const esc = (e: KeyboardEvent) => e.key === "Escape" && close();
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center">

            <button onClick={close} className="absolute top-6 right-6 text-white">
                <X size={32} />
            </button>

            <button onClick={prev} className="absolute left-6 text-white">
                <ChevronLeft size={40} />
            </button>

            <img
                src={images[index]}
                className="max-h-[85vh] rounded-xl shadow-2xl"
            />

            <button onClick={next} className="absolute right-6 text-white">
                <ChevronRight size={40} />
            </button>

            <div className="absolute bottom-6 text-white text-sm">
                {index + 1} / {images.length}
            </div>

        </div>
    );
}
