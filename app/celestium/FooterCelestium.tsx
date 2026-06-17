import Link from "next/link";

export default function FooterCeslestium() {
    return (
        // TELA WRAPPER E BACKGROUND
        <div className="flex flex-col w-full bg-black h-80 items-start justify-center px-40">

            {/* CELESTIUM SERVIÇOS */}
            <div className="flex flex-row items-center justify-center">
                <img src="/logoCeslestiumtrue.jpeg" alt="logo Celestium" className="h-10 w-10 mr-2 rounded-md" />
                <h1 className="flex font-bold">Celestium</h1>
                <span className="font-bold text-purple-500">MC</span>
            </div>

            {/* SERVIÇOS */}
            <div className="flex flex-col justify-center items-start mt-4">
                <h1 className="text-gray-400 text-sm">A melhor experiência Minecraft você encontra aqui. Junte-se a
                    <br />
                    <span> nós e comece sua jornada hoje mesmo.</span></h1>
            </div>

            <div className="flex flex-row items-center justify-center gap-6 mt-4">
                {/* ICONES/DISCORD */}
                <Link href="https://discord.gg/MF2m9DE8s">
                    <button className="flex items-center justify-center bg-purple-950/60 w-8 h-8 rounded-md mt-2 hover:bg-purple-800 transition-all duration-300 hover:scale-110">
                        <img src="/Discord.png" alt="Discord" className="invert w-6 h-6" />
                    </button>
                </Link>

                {/* ICONES/INSTAGRAM */}
                <Link href="https://www.instagram.com/celestiummc?igsh=MTBydGh1Ymd1bzBxcQ==">
                    <button className="flex items-center justify-center bg-purple-950/60 w-8 h-8 rounded-md mt-2 hover:bg-purple-800 transition-all duration-300 hover:scale-110">
                        <img src="/instagram.png" alt="Discord" className="invert w-5 h-5" />
                    </button>
                </Link>

                {/* ICONES/TIK TOK */}
                <Link href="https://www.tiktok.com/@celestium.mc3?_r=1&_t=ZS-97IL9lCHUIL">
                    <button className="flex items-center justify-center bg-purple-950/60 w-8 h-8 rounded-md mt-2 hover:bg-purple-800 transition-all duration-300 hover:scale-110">
                        <img src="/tik-tok.png" alt="Discord" className="invert w-5 h-5" />
                    </button>
                </Link>
            </div>



            {/* R DE COPYRIGHT */}
            <div className="flex flex-row w-full items-center justify-center mt-10">
                <div className="text-gray-500 text-xs">© 2026 CelestiumMC. Todos os direitos reservados. Desenvolvido para máxima fidelidade visual.</div>
            </div>
        </div>
    )
}